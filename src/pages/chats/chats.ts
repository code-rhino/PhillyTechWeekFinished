import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ChatsServiceProvider} from '../../providers/chats-service/chats-service';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

  public chats: any;

  constructor(public nav: NavController, public chatService: ChatsServiceProvider) {
    // get sample data only
    this.chats = chatService.getAll();
  }

  viewChat(id) {
    this.nav.push("ChatDetailPage", {id: id});
  }
}
