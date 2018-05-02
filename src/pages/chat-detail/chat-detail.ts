import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import {ChatsServiceProvider} from '../../providers/chats-service/chats-service';

/**
 * Generated class for the ChatDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-detail',
  templateUrl: 'chat-detail.html',
})
export class ChatDetailPage {

  @ViewChild(Content) content: Content;

  constructor(public navCtrl: NavController, public navParams: NavParams, public chatService: ChatsServiceProvider) {
        // get sample data only
    //this.chat = chatService.getItem(navParams.get('id'));
    this.chat = chatService.getItem(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatDetailPage');
  }


  public chat: any;
  public newMessage: any;


  // send message
  sendMessage() {
    if (this.newMessage) {
      this.chat.messages.push({
        type: 'sent',
        text: this.newMessage,
        image: '',
        time: 'Just now'
      });

      // clear input
      this.newMessage = '';

      // scroll to bottom
      setTimeout(() => {
        // scroll to bottom
        this.content.scrollToBottom();
      }, 200)
    }
  }
}
