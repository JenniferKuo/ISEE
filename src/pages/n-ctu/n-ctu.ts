import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { MyQuestionPoolPage } from '../my-question-pool/my-question-pool';

@Component({
  selector: 'page-n-ctu',
  templateUrl: 'n-ctu.html'
})
export class NCTUPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
  }
  addQuestion(params){
    if (!params) params = {};
    
    let toast = this.toastCtrl.create({
      message: 'Sharing successfully',
      duration: 3000,
      position: 'top'
    });

    toast.present();

      this.navCtrl.push(MyQuestionPoolPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
    
  }
}
