import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ResultPage } from '../result/result';

@Component({
  selector: 'page-my-records',
  templateUrl: 'my-records.html'
})
export class MyRecordsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToResult(params){
    if (!params) params = {};
    this.navCtrl.push(ResultPage);
  }
}
