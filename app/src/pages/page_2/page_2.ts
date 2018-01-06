import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page6 } from '../page_6/page_6';
import { Page7 } from '../page_7/page_7';
import { QuestionsService } from '../../services/questions';
import { TestedDateService } from '../../services/testedDate';
import { UserAnswers } from '../../services/user-answers';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { DayDotsComponent } from '../../components/day-dots/day-dots';
import { useAnimation } from '@angular/core/src/animation/dsl';

@Component({
  selector: 'page_2',
  templateUrl: 'page_2.html'
})
export class Page2 {

  @ViewChild(DayDotsComponent) dotsComponent: DayDotsComponent;

  todayQuestions: any;
  todayAnswers: any;
  isTodayWasAlreadyCovered: boolean = false;
  loading: any;
  isSaveChangesEnabled: boolean = false;

  currentDate: string;
  days: number[];
  dayOfTheWeek = "";

  answersSaved: boolean = false;

  myInput: any;
  buttonText: string;
  saveButton;




  constructor(
    public navCtrl: NavController,
    public questionsService: QuestionsService,
    public testingService: TestedDateService,
    public userAnswers: UserAnswers,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private dots: DayDotsComponent
   ) {
    this.currentDate = new Date(testingService.getTestedDate().getTime() - (testingService.getTestedDate().getTimezoneOffset() * 60000)).toISOString().substring(0, 10);
    this.todayQuestions = questionsService.getTodaysQuestion(this.currentDate);
    userAnswers.getTodayAnswers(this.currentDate).then((answers) => {
      this.todayAnswers = answers;
      if (!this.todayAnswers) {
        this.todayAnswers = {};
        for (let i in this.todayQuestions.questions) {
          this.todayAnswers[i] = null;
        };
      }
      else
        this.isTodayWasAlreadyCovered = true;
    });

    // while(!userAnswers.getBlueDots())
    // {
    //   setTimeout(() => {}, 5000);
    //   console.log("the current dots are ", userAnswers.getBlueDots());

    // }
    
    // this.updateDots();
    let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    this.dayOfTheWeek = weekday[testingService.getTestedDate().getDay()];

      


  }

  ionViewDidEnter()
  {
    this.buttonText = "ENTRY";
    this.saveButton = document.getElementById("save");
    this.saveButton.setAttribute("disabled", "disabled");
    
    if(this.isTodayWasAlreadyCovered) // answers are already there
    {
      this.buttonText = "CHANGES";
      this.saveButton.setAttribute("disabled", "disabled");
    } 
      
    console.log("ionViewDidEnter");
    this.myInput = document.getElementsByTagName("textarea");

    for (let i = 0; i < this.myInput.length; i++) {
      this.myInput[i].addEventListener("keyup", () => {
        this.saveButton.removeAttribute("disabled");
        console.log("text changed and save changes was enabled");
        

  
    });
  }
  }

  segmentChanged() {
    this.saveButton.removeAttribute("disabled");
    console.log("segment changed and save changes was enabled");
  }

  updateDots()
  {
    this.userAnswers.getBlueDots().then(
      (dots) =>
      {
        console.log("DOTS ARE ", dots);
        this.dotsComponent.updateDots(dots);  
      },
      (error) =>
      {
        console.log("DOTS ARE UNDEFINED YET  ", error);
      }
    );
  }
  
  ngOnInit()
  {
    // let temp = this.userAnswers.getBlueDots();
    // if(temp == undefined || temp == null) this.days = [];
    // else this.days = temp;

  }

  goPage6() {
    this.navCtrl.setRoot(Page6);
  }

  goPage7() {
    this.navCtrl.setRoot(Page7);
  }

  onSave() {
    console.log("saving your info");
    let numberOfDaysElapse = this.testingService.getNumberOfDaysElapse();
    if (numberOfDaysElapse > -1)
      this.userAnswers.addANewDot(numberOfDaysElapse).then(() => {
        this.dotsComponent.ngOnInit();
      }, (error) => {
        console.log("addANewDot did not work, " + error);
      });
    // this.dots.updateDots();
    this.userAnswers.setTodayAnswers(this.currentDate, this.todayAnswers).then(() => {
      this.loading = this.loadingCtrl.create
      ({
        content: 'Saving your answers...'
      });
      this.loading.present();
      setTimeout(() => {
        
        this.loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Entry saved!',
          subTitle: "Today’s entry saved! Thanks for fighting for your spiritual health.",
          buttons: ['Ok']
        });
        alert.present();
        this.isTodayWasAlreadyCovered = true;
        this.isSaveChangesEnabled = false;

        this.buttonText = "CHANGES";
        this.saveButton.setAttribute("disabled", "disabled");
      }
      , 2000);
    });


    
    // this.days = [1, 3, 5];
    // this.updateDots();
  }
  
  
  textChanged(event)
  {
    this.isSaveChangesEnabled = true;
    console.log("sth changes");
    
  }
  
  // ngAfterViewInit() {
  //   console.log("firing ngAfterViewInit...");
  //   this.updateDots();
  //   // this.days = [0,1,3,4,5];
  // }
}
