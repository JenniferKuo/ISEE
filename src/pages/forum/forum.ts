import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WhyAreYouInterestedInOurSchoolPage } from '../why-are-you-interested-in-our-school/why-are-you-interested-in-our-school';
import { VideoPage } from '../video/video';
import { MyVideoPage } from '../my-video/my-video';

@Component({
  selector: 'page-forum',
  templateUrl: 'forum.html'
})
export class ForumPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  answer = "others";
  constructor(public navCtrl: NavController) {
    
  }
  goToWhyAreYouInterestedInOurSchool(params){
    if (!params) params = {};
    this.navCtrl.push(WhyAreYouInterestedInOurSchoolPage);
  }goToVideo(params){
    if (!params) params = {};
    this.navCtrl.push(VideoPage);
  }goToMyVideo(params){
    if (!params) params = {};
    this.navCtrl.push(MyVideoPage);
  }
}
