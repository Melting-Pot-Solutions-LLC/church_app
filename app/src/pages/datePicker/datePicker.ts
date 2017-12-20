import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UserAnswers } from '../../services/user-answers';

@Component({
  selector: 'datePicker',
  templateUrl: 'datePicker.html'
})

export class DatePickerPage {
  today = new Date().toISOString();

  constructor(public navCtrl: NavController, public userAnswers: UserAnswers) {

  }

  dateChanged()
  {
    console.log("date is changed");
  }

  clearData()
  {
    this.userAnswers.clearAllAnswers().then(
      () =>
      {
        console.log("data cleared");
      }
    )
    ;
  }

}
