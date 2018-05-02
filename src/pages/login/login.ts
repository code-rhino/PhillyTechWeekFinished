import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import {HomePage} from  '../home/home';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {Account} from '../../models/Account.interface';
import {LoginResponse} from '../../models/LoginResponse.interface';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public account = {} as Account;
  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider, private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  register() {
    this.navCtrl.setRoot("RegisterPage");
  }

  async login() {
    // add your check auth here
    const loginResponse = await this.auth.signInWithEmailAndPassword(this.account);
    if(!loginResponse.error){
      this.toast.create({
        message: `Welcome, ${loginResponse.result.email}`,
        duration:3000
      }).present();
      this.navCtrl.setRoot(HomePage);
      
    } else {
      this.toast.create({
        message: loginResponse.error.message,
        duration:3000
      }).present();
    }
  }
}
