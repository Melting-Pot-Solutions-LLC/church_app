import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Page5 } from '../page_5/page_5';
import { TestedDateService } from '../../services/testedDate';
import { QuestionsService } from '../../services/questions';
import { UserAnswers } from '../../services/user-answers';

@Component({
  selector: 'page_4',
  templateUrl: 'page_4.html'
})
export class Page4 {

	items2: any[] = [];
	items: any[] = [];
	completed_dates: any[] = [];
	// days: number[] = [0, 1, 2];

  constructor(
  	public navCtrl: NavController,
  	public navPar: NavParams,
  	public testingService: TestedDateService,
  	public questions: QuestionsService,
  	public userAnswers: UserAnswers
  ) {
		let passedMonth = this.navPar.get("month");
		let passedMonthNumber = 0;
		
		let testedDate = this.testingService.getTestedDate();
		let testedMonthNumber	= testedDate.getMonth();

		console.log(" testing day - ", testedDate);
		console.log(" testing date - ", testedDate.getDate());

		switch (passedMonth) {
			case "January":
				passedMonthNumber = 0;
				break;

			case "February":
				passedMonthNumber = 1;
				break;

			case "March":
				passedMonthNumber = 2;
				break;

			case "April":
				passedMonthNumber = 3;
				break;

			case "May":
				passedMonthNumber = 4;
				break;
		
			default:
				break;
		}

		this.items2 = questions.getQuestionsByMonth(passedMonthNumber);
		console.log(this.items2);
		
		if (passedMonthNumber < testedMonthNumber)
		{
			// show full month
			this.items = this.items2;
		}
		else if(passedMonthNumber == testedMonthNumber)
		{
			//only show days until today
			let finalDate = testedDate.getDate();
			if (passedMonth == "January") finalDate = testedDate.getDate() - 20;
			for(let i = 0; i < finalDate; i++)
			{

				this.items.push(this.items2[i]);
			}
		}
		else
		{
			//don't show anything at all
			this.items2 = [];
		}

		// get completed_dates
    userAnswers.getCompletedDatesForMonth(passedMonthNumber).then((dates) => {
	  this.completed_dates = dates;
	  console.log("dates");
	  console.log(dates);
    });

  }

  goPage5(date) {
	  console.log("the date is " + date);
    this.navCtrl.push(Page5, {date: date});
  } 

}
