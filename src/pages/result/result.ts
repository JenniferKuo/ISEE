import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShareAnswerPage } from '../share-answer/share-answer';
import { ISEEPage } from '../i-see/i-see';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})
export class ResultPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToShareAnswer(params){
  	if (!params) params = {};
    this.navCtrl.push(ShareAnswerPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(ISEEPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
  }
}
