import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatDetailPage } from './chat-detail';
import {PipesModule} from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    ChatDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatDetailPage),
    PipesModule
  ],
})
export class ChatDetailPageModule {}
