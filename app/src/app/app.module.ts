import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Page1 } from '../pages/page_1/page_1';
import { Page2 } from '../pages/page_2/page_2';
import { Page3 } from '../pages/page_3/page_3';
import { Page4 } from '../pages/page_4/page_4';
import { Page5 } from '../pages/page_5/page_5';
import { Page6 } from '../pages/page_6/page_6';
import { Page7 } from '../pages/page_7/page_7';
import { DatePickerPage } from '../pages/datePicker/datePicker';

import { TabsPage } from '../pages/tabs_page/tabs_page';
import { DayDotsComponent } from '../components/day-dots/day-dots';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { QuestionsService } from '../services/questions';
import { TestedDateService } from '../services/testedDate';
import { UserAnswers } from '../services/user-answers';

import { ElasticTextareaDirective } from '../directives/elastic-textarea/elastic-textarea';

import { MomentModule } from 'angular2-moment';
import { ElasticModule } from 'angular2-elastic';


@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    DatePickerPage,
    TabsPage,
    DayDotsComponent,
    ElasticTextareaDirective
  ],
  imports: [
    BrowserModule,
    MomentModule,
    ElasticModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      tabsPlacement: 'bottom',
      tabsHideOnSubPages: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    Page3,
    Page4,
    Page5,
    Page6,
    Page7,
    DatePickerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    InAppBrowser,
    QuestionsService,
    TestedDateService,
    UserAnswers,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DayDotsComponent
    
  ]
})
export class AppModule {}
