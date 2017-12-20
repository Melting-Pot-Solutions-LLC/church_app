import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { QuestionsService } from '../../services/questions';
import { UserAnswers } from '../../services/user-answers';

@Component({
  selector: 'page_5',
  templateUrl: 'page_5.html'
})
export class Page5 {

  dateQuestions: any;
  dateAnswers: any;
  dateDay: any;
  dateMonth: any;
  days: number[] = [0, 1, 2];

  constructor(
  	public navCtrl: NavController,
  	public navPar: NavParams,
  	public questionsService: QuestionsService,
    public userAnswers: UserAnswers,
  ) {
  	let passedDate = this.navPar.get("date");
  	// this.dateDay = ("0" + (new Date(passedDate)).getDate()).slice(-2);
    this.dateDay = passedDate.slice(-2);
    
    this.dateMonth = (new Date(passedDate)).toLocaleString('en-us', { month: "long" });
    let monthNumber = passedDate.slice(-5,-3);

    switch (monthNumber) {
      case "01": this.dateMonth = "January";
        break;
      case "02": this.dateMonth = "February";
        break;
      case "03": this.dateMonth = "March";
        break;
      case "04": this.dateMonth = "April";
        break;
      case "05": this.dateMonth = "May";
        break;
      default:
        break;
    }
    
    


    this.dateQuestions = questionsService.getTodaysQuestion(passedDate);
    userAnswers.getTodayAnswers(passedDate).then((answers) => {
      this.dateAnswers = answers;
      if (!this.dateAnswers) {
        this.dateAnswers = {};
        for (let i in this.dateQuestions.questions) {
          this.dateAnswers[i] = null;
        };
      }
    });
  }
}
