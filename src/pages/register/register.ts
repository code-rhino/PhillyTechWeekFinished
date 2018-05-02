import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthServiceProvider} from '../../providers/auth-service/auth-service';
import {Account} from '../../models/Account.interface';
import {LoginResponse} from '../../models/LoginResponse.interface';
import {ToastController} from 'ionic-angular';
import {HomePage} from  '../home/home';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public account = {} as Account;

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AuthServiceProvider, private toast:ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }



async register() {
  try {
    const result = await this.auth.createUserWithEmailAndPassword(this.account);
    if(!result.error){
      this.toast.create({
        message: `Account created: ${result.result.email}`,
        duration:3000
      }).present();
      this.navCtrl.setRoot(HomePage);
    } else {
      this.toast.create({
        message: `Account not created: ${result.error.message}`,
        duration:3000
      }).present();
    }
  }catch(e){

  }
}

login() {
  // add your check auth here
  this.navCtrl.setRoot("LoginPage");
}
}
