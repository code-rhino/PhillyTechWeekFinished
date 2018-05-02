import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FormsModule}   from '@angular/forms';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PostServiceProvider } from '../providers/post-service/post-service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UserServiceProvider } from '../providers/user-service/user-service';
import { ChatsServiceProvider } from '../providers/chats-service/chats-service';
import {PipesModule} from '../pipes/pipes.module';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { FIREBASE_CREDENTIALS } from '../firebase.credentials';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PipesModule,
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostServiceProvider,
    UserServiceProvider,
    ChatsServiceProvider,
    UserServiceProvider,
    AuthServiceProvider
  ]
})
export class AppModule {}
