import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page_6',
  templateUrl: 'page_6.html'
})
export class Page6 {

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

  }

  openWebsite(website) {
    this.iab.create(website, '_system', {location: 'yes'});
  }
}
