import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyQuestionPoolPage } from '../my-question-pool/my-question-pool';
import { ForumPage } from '../forum/forum';
import { WhyAreYouInterestedInOurSchoolPage } from '../why-are-you-interested-in-our-school/why-are-you-interested-in-our-school';
import { VideoPage } from '../video/video';
import { ISEEPage } from '../i-see/i-see';
import { MyRecordsPage } from '../my-records/my-records';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = ISEEPage;
  tab2Root: any = MyQuestionPoolPage;
  tab3Root: any = MyRecordsPage;
  tab4Root: any = ForumPage;
  constructor(public navCtrl: NavController) {
  }
  goToMyQuestionPool(params){
    if (!params) params = {};
    this.navCtrl.push(MyQuestionPoolPage);
  }goToForum(params){
    if (!params) params = {};
    this.navCtrl.push(ForumPage);
  }goToWhyAreYouInterestedInOurSchool(params){
    if (!params) params = {};
    this.navCtrl.push(WhyAreYouInterestedInOurSchoolPage);
  }goToVideo(params){
    if (!params) params = {};
    this.navCtrl.push(VideoPage);
  }
}
