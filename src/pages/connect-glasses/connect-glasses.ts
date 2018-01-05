import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ISEEPage } from '../i-see/i-see';
import { StartInterviewPage } from '../start-interview/start-interview';

@Component({
  selector: 'page-connect-glasses',
  templateUrl: 'connect-glasses.html'
})
export class ConnectGlassesPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
    setTimeout(() => {
      this.navCtrl.push(StartInterviewPage);
    }, 3400);
  }
  goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(ISEEPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
  }goToStartInterview(params){
    if (!params) params = {};
    this.navCtrl.push(StartInterviewPage);
  }popView(){
     this.navCtrl.pop();
  }
}
