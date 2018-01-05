import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NCTUPage } from '../n-ctu/n-ctu';

@Component({
  selector: 'page-add-new-question',
  templateUrl: 'add-new-question.html'
})
export class AddNewQuestionPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToNCTU(params){
    if (!params) params = {};
    this.navCtrl.push(NCTUPage);
  }
}
