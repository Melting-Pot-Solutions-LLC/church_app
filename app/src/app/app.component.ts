import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Page1 } from '../pages/page_1/page_1';
import { DatePickerPage } from '../pages/datePicker/datePicker';

import { TabsPage } from '../pages/tabs_page/tabs_page';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = Page1;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
