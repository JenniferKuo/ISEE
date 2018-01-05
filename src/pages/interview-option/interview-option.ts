import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectPoolPage } from '../select-pool/select-pool';
import { ConnectGlassesPage } from '../connect-glasses/connect-glasses';
import { ISEEPage } from '../i-see/i-see';

@Component({
  selector: 'page-interview-option',
  templateUrl: 'interview-option.html'
})
export class InterviewOptionPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  currentNumber = 4;
    pic1 = 1;
    pic2 = 1;
    pic3 = 1;
    picSrc1 = "assets/img/random.png";
    picSrc2 = "assets/img/random.png";
    picSrc3 = "assets/img/random.png";
  constructor(public navCtrl: NavController) {
    
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
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(ISEEPage,{animate:true, animation:"ios-transition", direction:"back", duration: 1000, easing: 'ease-in'});
  }popView(){
     this.navCtrl.pop();
  }decrement(i) {
    this.currentNumber--;
  }increment(i) {
    this.currentNumber++;
  }changePic1(i) {
    this.pic1++;
    this.pic1 = this.pic1%4;
    switch(this.pic1) {
      case 0:
          this.picSrc1 = "assets/img/random.png";
          break;
      case 1:
          this.picSrc1 = "assets/img/goodCop.png";
          break;
      case 2:
          this.picSrc1 = "assets/img/badCop.png";
          break;
      case 3:
          this.picSrc1 = "assets/img/no.png";
          break;
      default:
        ;    
    }
  }changePic2(i) {
    this.pic2++;
    this.pic2 = this.pic2%4;
    switch(this.pic2) {
      case 0:
          this.picSrc2 = "assets/img/random.png";
          break;
      case 1:
          this.picSrc2 = "assets/img/goodCop.png";
          break;
      case 2:
          this.picSrc2 = "assets/img/badCop.png";
          break;
      case 3:
          this.picSrc2 = "assets/img/no.png";
          break;
      default:
        ;    
    }
  }changePic3(i) {
    this.pic3++;
    this.pic3 = this.pic3%4;
    switch(this.pic3) {
      case 0:
          this.picSrc3 = "assets/img/random.png";
          break;
      case 1:
          this.picSrc3 = "assets/img/goodCop.png";
          break;
      case 2:
          this.picSrc3 = "assets/img/badCop.png";
          break;
      case 3:
          this.picSrc3 = "assets/img/no.png";
          break;
      default:
        ;    
    }
  }
}
