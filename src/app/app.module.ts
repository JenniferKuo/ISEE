import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ISEEPage } from '../pages/i-see/i-see';
import { PopoverPage } from '../pages/i-see-popover/i-see-popover';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { PoolPage } from '../pages/pool/pool';
import { MyRecordsPage } from '../pages/my-records/my-records';
import { ForumPage } from '../pages/forum/forum';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { SelectPoolPage } from '../pages/select-pool/select-pool';
import { MyQuestionPoolPage } from '../pages/my-question-pool/my-question-pool';
import { AddNewQuestionPage } from '../pages/add-new-question/add-new-question';
import { InterviewOptionPage } from '../pages/interview-option/interview-option';
import { ConnectGlassesPage } from '../pages/connect-glasses/connect-glasses';
import { StartInterviewPage } from '../pages/start-interview/start-interview';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { ResultPage } from '../pages/result/result';
import { ShareAnswerPage } from '../pages/share-answer/share-answer';
import { NCTUPage } from '../pages/n-ctu/n-ctu';
import { WhyAreYouInterestedInOurSchoolPage } from '../pages/why-are-you-interested-in-our-school/why-are-you-interested-in-our-school';
import { VideoPage } from '../pages/video/video';
import { MyVideoPage } from '../pages/my-video/my-video';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ISEEPage,
    MyProfilePage,
    PoolPage,
    MyRecordsPage,
    ForumPage,
    TabsControllerPage,
    SelectPoolPage,
    MyQuestionPoolPage,
    AddNewQuestionPage,
    InterviewOptionPage,
    ConnectGlassesPage,
    StartInterviewPage,
    LoginPage,
    SignUpPage,
    ResultPage,
    ShareAnswerPage,
    NCTUPage,
    WhyAreYouInterestedInOurSchoolPage,
    VideoPage,
    MyVideoPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ISEEPage,
    MyProfilePage,
    PoolPage,
    MyRecordsPage,
    ForumPage,
    TabsControllerPage,
    SelectPoolPage,
    MyQuestionPoolPage,
    AddNewQuestionPage,
    InterviewOptionPage,
    ConnectGlassesPage,
    StartInterviewPage,
    LoginPage,
    SignUpPage,
    ResultPage,
    ShareAnswerPage,
    NCTUPage,
    WhyAreYouInterestedInOurSchoolPage,
    VideoPage,
    MyVideoPage,
    PopoverPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}