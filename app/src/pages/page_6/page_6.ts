import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { TestedDateService } from '../../services/testedDate';

@Component({
  selector: 'page_6',
  templateUrl: 'page_6.html'
})
export class Page6 {
  today: String;

  constructor(public navCtrl: NavController, private iab: InAppBrowser, public testingService: TestedDateService) 
  {
    this.today = testingService.getTestedDate().toISOString();
  }

  openWebsite(website) {
    this.iab.create(website, '_system', {location: 'yes'});
  }
}
