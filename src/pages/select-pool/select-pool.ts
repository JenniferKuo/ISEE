import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InterviewOptionPage } from '../interview-option/interview-option';
import { ConnectGlassesPage } from '../connect-glasses/connect-glasses';
import { ISEEPage } from '../i-see/i-see';

@Component({
  selector: 'page-select-pool',
  templateUrl: 'select-pool.html'
})
export class SelectPoolPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToInterviewOption(params){
    if (!params) params = {};
    this.navCtrl.push(InterviewOptionPage);
  }goToSelectPool(params){
    if (!params) params = {};
    this.navCtrl.push(SelectPoolPage);
  }goToConnectGlasses(params){
    if (!params) params = {};
    this.navCtrl.push(ConnectGlassesPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(ISEEPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
  }popView(){
     this.navCtrl.pop();
  }
}
