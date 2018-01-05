import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ISEEPage } from '../i-see/i-see';
import { SelectPoolPage } from '../select-pool/select-pool';
import { InterviewOptionPage } from '../interview-option/interview-option';
import { ConnectGlassesPage } from '../connect-glasses/connect-glasses';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToISEE(params){
    if (!params) params = {};
    this.navCtrl.push(ISEEPage);
  }goToSelectPool(params){
    if (!params) params = {};
    this.navCtrl.push(SelectPoolPage);
  }goToInterviewOption(params){
    if (!params) params = {};
    this.navCtrl.push(InterviewOptionPage);
  }goToConnectGlasses(params){
    if (!params) params = {};
    this.navCtrl.push(ConnectGlassesPage);
  }
}
