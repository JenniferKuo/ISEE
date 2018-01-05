import { Component } from '@angular/core';
import { NavController, ToastController  } from 'ionic-angular';
import { ISEEPage } from '../i-see/i-see';

@Component({
  selector: 'page-share-answer',
  templateUrl: 'share-answer.html'
})

export class ShareAnswerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
  }

  shareButton(params){
    if (!params) params = {};

    let toast = this.toastCtrl.create({
	    message: 'Sharing successfully',
	    duration: 3000,
	    position: 'top'
	});

	toast.present();

    this.navCtrl.push(ISEEPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
  }
}
