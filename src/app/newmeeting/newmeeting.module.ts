import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewmeetingPageRoutingModule } from './newmeeting-routing.module';

import { NewmeetingPage } from './newmeeting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewmeetingPageRoutingModule
  ],
  declarations: [NewmeetingPage]
})
export class NewmeetingPageModule {}
