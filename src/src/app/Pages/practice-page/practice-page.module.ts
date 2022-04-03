import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticePagePageRoutingModule } from './practice-page-routing.module';

import { PracticePagePage } from './practice-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticePagePageRoutingModule
  ],
  declarations: [PracticePagePage]
})
export class PracticePagePageModule {}
