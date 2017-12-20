import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Page4 } from '../page_4/page_4';
import { Page6 } from '../page_6/page_6';
import { Page7 } from '../page_7/page_7';

import { TestedDateService } from '../../services/testedDate';
import { DayDotsComponent } from '../../components/day-dots/day-dots';

@Component({
  selector: 'page_3',
  templateUrl: 'page_3.html'
})
export class Page3 {

	@ViewChild(DayDotsComponent) dotsComponent: DayDotsComponent;

	toShow = false;

	items: string[] = [];

	items2: string[] = [
		'January',
		'February',
		'March', 
		'April', 
		'May'
	];

	not_started: string[] = [
		'Not started'
	];

	ended: string[] = [
		'Ended'
	];

	ionViewDidEnter()
	{
		// let date = new Date();
		// let month = date.getMonth();
		let testedDate = this.testingService.getTestedDate();
		let testedMonth = testedDate.getMonth(); // jan will be 0
		console.log("tested month = " + testedMonth);
		
		for(let i = 0; i < this.items2.length; i++)
		{	
			if(i <= testedMonth)
			{
				this.items.push(this.items2[i]);
			}
		}
	}

	ionViewDidLeave()
	{
		this.items2 = [];
	}

  constructor(public navCtrl: NavController, public testingService: TestedDateService) {



  }

  goPage4(month) {
		console.log(month);
		console.log(typeof(month));
    this.navCtrl.push(Page4, {month: month});
	}  

  goPage6() {
    this.navCtrl.push(Page6);
	}  

  goPage7() {
    this.navCtrl.push(Page7);
	}  
	
	
}
