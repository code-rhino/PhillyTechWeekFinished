import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {LoginResponse} from '../../models/LoginResponse.interface';
import { AngularFireAuth } from 'angularfire2/auth';
import {Account} from '../../models/Account.interface';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(private auth:AngularFireAuth) {
    console.log('Hello AuthServiceProvider Provider');
  }

  async signInWithEmailAndPassword(account:Account){
    try {
      return <LoginResponse> {
        result: await this.auth.auth.signInWithEmailAndPassword(account.email, account.password)
      }
    }
    catch(e){
      return <LoginResponse> {
        error: e
      };
    }
  }

  async createUserWithEmailAndPassword(account){
    try {
      return <LoginResponse>{
        result:await this.auth.auth.createUserWithEmailAndPassword(account.email,account.password)
      }
    }catch (e){
      return <LoginResponse>{
        error: e
      }
    }
  } 

  getAuthenticatedUser(){
    return this.auth.authState;
  }

}
