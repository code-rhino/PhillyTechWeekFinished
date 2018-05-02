import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from '../../providers/user-service/user-service';


/**
 * Generated class for the ContactsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contacts',
  templateUrl: 'contacts.html',
})
export class ContactsPage {

  public contacts: any;

  constructor(public nav: NavController, public userService: UserServiceProvider) {
    this.contacts = userService.getAll();
  }

  // on click, go to user timeline
  viewUser(userId) {
    this.nav.push("UserPage", {id: userId})
  }

}
