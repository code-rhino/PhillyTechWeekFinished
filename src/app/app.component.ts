import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {ViewChild} from '@angular/core';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html',
  queries: {
    nav: new ViewChild('content')
  }
})
export class MyApp {
  public rootPage: string;

  public nav: any;

  public pages = [
    {
      title: 'Home',
      icon: 'ios-home-outline',
      count: 0,
      component: HomePage
    },
    {
      title: 'Contacts',
      icon: 'ios-person-outline',
      count: 0,
      component: "ContactsPage"
    },
    {
      title: 'Message',
      icon: 'ios-mail-outline',
      count: 2,
      component: "ChatsPage"
    },
    {
      title: 'Logout',
      icon: 'ios-log-out-outline',
      count: 0,
      component: "LoginPage"
    },

  ];

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.rootPage = "LoginPage";

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  // on click, go to user timeline
  viewUser(userId) {
    //this.nav.push(UserPage, {id: userId})
  }
}

