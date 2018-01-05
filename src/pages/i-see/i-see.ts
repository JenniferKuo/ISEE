import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { PopoverPage } from '../i-see-popover/i-see-popover';
import { SelectPoolPage } from '../select-pool/select-pool';
import { InterviewOptionPage } from '../interview-option/interview-option';
import { ConnectGlassesPage } from '../connect-glasses/connect-glasses';
import { MyProfilePage } from '../my-profile/my-profile';

@Component({
  selector: 'page-i-see',
  templateUrl: 'i-see.html',
})

export class ISEEPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController) {
  }
  goToSelectPool(params){
    if (!params) params = {};
    this.navCtrl.push(SelectPoolPage);
  }goToInterviewOption(params){
    if (!params) params = {};
    this.navCtrl.push(InterviewOptionPage);
  }goToConnectGlasses(params){
    if (!params) params = {};
    this.navCtrl.push(ConnectGlassesPage);
  }goToMyProfile(params){
    if (!params) params = {};
    this.navCtrl.push(MyProfilePage);
  }presentPopover(event: Event) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({ ev: event });
  }
}
