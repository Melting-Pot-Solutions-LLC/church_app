import { Injectable } from '@angular/core';

import { NativeStorage } from '@ionic-native/native-storage';


@Injectable()
export class UserAnswers {

  constructor(public nativeStorage: NativeStorage) {}

  getTodayAnswers(date: string): Promise<any> {
    return this.nativeStorage.getItem(date).then((answers) => {
      return answers;
    }, (error) => {
    	return null;
    });
  };

  getCompletedDatesForMonth(month: number): Promise<any> {
    return this.nativeStorage.keys().then((keys) => {
      return keys.filter(function(key) {
        return month == (new Date(key)).getUTCMonth();
      });
    }, (error) => {
      return [];
    });
  };

  setTodayAnswers(date: string, answers: string): Promise<any> {
    return this.nativeStorage.setItem(date, answers);
  };

  clearAllAnswers(): Promise<any> {
    return this.nativeStorage.clear();
  };

  getBlueDots():  Promise<any> {
    console.log("getting all the dots...");
    return this.nativeStorage.getItem("dots").then((dots:number[]) => {
      console.log("...dots really existed ", dots);
      return dots;
      
    }, (error) => {
      console.log("...dots don't exist yet");
    	return null;
    });
  };


addANewDot(dateNumber: number): Promise<any>
{
  return this.getBlueDots().then(
    (dots) =>
    {
      console.log("DOTS ARE ", dots);
      let dots2 = [];
      if(!dots)
      {
        dots2 = [];
        dots2.push(dateNumber);
      }
      else
      {
        dots.push(dateNumber);
        dots2 = dots;
      }
      return this.nativeStorage.setItem("dots", dots2);


    },
    (error) =>
    {
      console.log("DOTS ARE UNDEFINED YET  ", error);
      let dots = [];
      return this.nativeStorage.setItem("dots", dots);
    }
  );


}


  addANewDot2(dateNumber: number)
  {
    console.log("adding a new dot");
    let ar = [];
    this.nativeStorage.getItem("dots").then((previousArray) => {

      console.log("previously, the dots were ", previousArray);

      if(previousArray != undefined)
      {
        ar = previousArray;
      }

      ar.push(dateNumber);
      this.nativeStorage.setItem("dots", ar);
      
    }, (error) => {
      console.log("can not find dots... ", error);
      ar.push(dateNumber);
      this.nativeStorage.setItem("dots", ar);
    	return null;
    });
  }
}
