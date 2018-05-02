import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {UserServiceProvider} from '../../providers/user-service/user-service';
import {PostServiceProvider} from '../../providers/post-service/post-service';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  public user: any;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }
  constructor(public nav: NavController, public navParams: NavParams, public userService: UserServiceProvider, public postService: PostServiceProvider) {
    // get sample data only
    //this.user = userService.getItem(navParams.get('id'));
    this.user = userService.getItem(0);

    Object.assign(this.user, {
      'followers': 199,
      'following': 48,
      'favorites': 14,
      'posts': postService.getAll()
    });
  }

  toggleLike(post) {
    // if user liked
    if(post.liked) {
      post.likeCount--;
    } else {
      post.likeCount++;
    }

    post.liked = !post.liked
  }

  // on click, go to user timeline
  viewUser(userId) {
    this.nav.push(UserPage, {id: userId})
  }

  // on click, go to post detail
  viewPost(postId) {
    //this.nav.push(PostPage, {id: postId})
  }
}