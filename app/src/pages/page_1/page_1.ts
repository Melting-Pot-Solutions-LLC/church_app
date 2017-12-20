import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs_page/tabs_page';
import { Page7 } from '../page_7/page_7';
import { Page6 } from '../page_6/page_6';
import { TestedDateService } from '../../services/testedDate';
import { UserAnswers } from '../../services/user-answers';


@Component({
  selector: 'page_1',
  templateUrl: 'page_1.html'
})
export class Page1 {

  today = new Date().toISOString();

  constructor(public navCtrl: NavController, public testingService: TestedDateService, public userAnswers: UserAnswers) {

  }



  dateChanged()
  {
    let setDate = new Date(this.today);
    setDate.setMinutes(setDate.getTimezoneOffset());
    this.testingService.setTestedDate(setDate);
    console.log("date is changed to " + setDate);
    
    

    let start = new Date(2017, 0, 21);//Month is 0-11 in JavaScript
    console.log("the start date is  " + start);
    let end = new Date(2017, 4, 20);//Month is 0-11 in JavaScript
    //Set 1 day in milliseconds
    let one_day = 1000*60*60*24;
    let numberOfDaysElapsed = Math.ceil(((new Date(this.today)).getTime() - start.getTime())/one_day);
    console.log("date1 is " + Math.ceil(((new Date(this.today)).getTime() - start.getTime())/one_day));


    //check for negative values
    if (((setDate.getTime() - start.getTime())/one_day) < 0)
    {
      numberOfDaysElapsed = -1;
    }

    alert(numberOfDaysElapsed + " days since the marathon started");
    this.testingService.setNumberOfDaysElapse(numberOfDaysElapsed);
    
    
    // Calculate difference btw the two dates, and convert to days
    if(numberOfDaysElapsed >= 0 && numberOfDaysElapsed <= 120)
    {
      this.navCtrl.setRoot(TabsPage);

    }
    else if(numberOfDaysElapsed < 0)
    {
      this.navCtrl.setRoot(Page6);
    }
    else
    {
      this.navCtrl.setRoot(TabsPage);
    }



  }

  clearData()
  {
    this.userAnswers.clearAllAnswers().then(
      () =>
      {
        console.log("data cleared");
        alert("all local storage data has been erased");
      }
    )
    ;
  }

}
