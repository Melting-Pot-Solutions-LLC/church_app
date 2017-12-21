import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { UserAnswers } from '../../services/user-answers';

@Component({
  selector: 'day-dots',
  templateUrl: 'day-dots.html'
})
export class DayDotsComponent {

  @Input('days') days;
  @ViewChild('svg') svgElement: ElementRef;
  color: string = '#1D4054';
  blueDots: number[] = [];

  constructor(public nativeStorage: NativeStorage, public ua: UserAnswers) {
  }
  
  ngOnInit() {
    // while(!this.ua.getBlueDots())
    // {
    //   setTimeout(() => {}, 200);
    //   console.log("the dots are not loaded yet ");

    // }
    let svgRects = this.svgElement.nativeElement.getElementsByTagName('rect');

    this.nativeStorage.getItem("dots").then((dots:number[]) => {
      
            // this.updateDots(dots);
            for (let day_index of dots) {
              day_index = day_index - 1;
              if ((day_index >= -1) && svgRects[day_index])
                svgRects[day_index].style.fill = "#1D4054";
            }
      
          }, (error) => {
      
          });


        }
        



  updateDots(dots: number[])
  {

    let svgRects = this.svgElement.nativeElement.getElementsByTagName('rect');

    // this.blueDots = [];
    // this.nativeStorage.getItem("dots").then((dots:number[]) => {
    //   console.log("dots really existed ", dots);
    //   this.blueDots = dots;

    // }, (error) => {
    //   this.blueDots = null;
    // });
    // console.log("updating...blue dots are ", this.blueDots);


    if(dots != null)
    {
      for (let i = 0; i < dots.length; i++) {

        svgRects[dots[i]].style.fill = "#1D4054";
      }

    } 
  

  
  // ngAfterContentInit() {
  //   console.log("firing ngAfterContentInit...");
  //   this.updateDots([0, 1, 2, 3]);
  // }

  
}
    // ngAfterViewChecked() {
    //   // console.log("firing ngAfterViewChecked...");
    //   // let svgRects = this.svgElement.nativeElement.getElementsByTagName('rect');
  
    //   this.nativeStorage.getItem("dots").then((dots:number[]) => {
  
    //     this.updateDots(dots);
  
    //   }, (error) => {
  
    //   });

    // }


}
