import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewQuestionPage } from '../add-new-question/add-new-question';

@Component({
  selector: 'page-my-question-pool',
  templateUrl: 'my-question-pool.html'
})
export class MyQuestionPoolPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToAddNewQuestion(params){
    if (!params) params = {};
    this.navCtrl.push(AddNewQuestionPage);
  }
}
