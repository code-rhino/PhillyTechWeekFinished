import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {POSTS} from "./mock-posts";

/*
  Generated class for the PostServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PostServiceProvider {
  private posts: any;

  constructor() {
    this.posts = POSTS;
  }
  getAll() {
    return this.posts;
  }

  getItem(id) {
    for (var i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === parseInt(id)) {
        return this.posts[i];
      }
    }
    return null;
  }

  remove(item) {
    this.posts.splice(this.posts.indexOf(item), 1);
  }

}
