import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VideoPage } from '../video/video';

@Component({
  selector: 'page-why-are-you-interested-in-our-school',
  templateUrl: 'why-are-you-interested-in-our-school.html'
})
export class WhyAreYouInterestedInOurSchoolPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToVideo(params){
    if (!params) params = {};
    this.navCtrl.push(VideoPage);
  }
}
