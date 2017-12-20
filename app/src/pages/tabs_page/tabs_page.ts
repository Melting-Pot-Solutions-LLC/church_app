import { Component } from '@angular/core';

import { Page2 } from '../page_2/page_2';
import { Page3 } from '../page_3/page_3';
import { Page7 } from '../page_7/page_7';
import { TestedDateService } from '../../services/testedDate';

@Component({
  templateUrl: 'tabs_page.html'
})
export class TabsPage {

  tab2Root = Page3;
  tab1Root = (this.testingService.getNumberOfDaysElapse() > 120)?Page7:Page2;

  constructor( public testingService: TestedDateService) {

  }
}
