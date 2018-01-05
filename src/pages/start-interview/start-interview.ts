import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ISEEPage } from '../i-see/i-see';
import { ResultPage } from '../result/result'

@Component({
  selector: 'page-start-interview',
  templateUrl: 'start-interview.html'
})
export class StartInterviewPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(ISEEPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
  }goToResult(params){
  	if (!params) params = {};
    this.navCtrl.push(ResultPage);
  }
}
