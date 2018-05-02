import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {CHATS} from "./mock-chats";

/*
  Generated class for the ChatsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ChatsServiceProvider {

  private chats: any;

  constructor() {
    this.chats = CHATS;
  }
  getAll() {
    return this.chats;
  }

  getItem(id) {
    for (var i = 0; i < this.chats.length; i++) {
      if (this.chats[i].id === parseInt(id)) {
        return this.chats[i];
      }
    }
    return null;
  }

  remove(item) {
    this.chats.splice(this.chats.indexOf(item), 1);
  }
}
