import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs_page/tabs_page';
import { Page6 } from '../pages/page_6/page_6';
import { Page7 } from '../pages/page_7/page_7';
import { DatePickerPage } from '../pages/datePicker/datePicker';
import { TestedDateService } from '../services/testedDate';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public testingService: TestedDateService
  ) {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      let setDate = new Date();
      this.testingService.setTestedDate(setDate);

      let start = new Date(2018, 0, 21);//Month is 0-11 in JavaScript
      let end = new Date(2018, 4, 20);//Month is 0-11 in JavaScript
      let tmpStart = new Date(2018, 0, 5);
      // Set 1 day in milliseconds
      let one_day = 1000*60*60*24;
      setDate.setHours(2,0,0,0);
      let numberOfDaysElapsed = Math.ceil((setDate.getTime() - start.getTime())/one_day);

      // check for negative values
      if (((setDate.getTime() - start.getTime())/one_day) < 0)
        numberOfDaysElapsed = -1;
      
      // Calculate difference btw the two dates, and convert to days
      if (numberOfDaysElapsed >= 0 && numberOfDaysElapsed <= 120)
        this.rootPage = TabsPage
      else if ((numberOfDaysElapsed < 0) && (this.testingService.getTestedDate().getTime() < tmpStart.getTime()))
        this.rootPage = Page6
      else
        this.rootPage = TabsPage;

      // alert(numberOfDaysElapsed + " days since the marathon started");
      this.testingService.setNumberOfDaysElapse(numberOfDaysElapsed);
    });
  }
}
