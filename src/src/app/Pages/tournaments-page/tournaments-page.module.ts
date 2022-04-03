import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentsPagePageRoutingModule } from './tournaments-page-routing.module';

import { TournamentsPagePage } from './tournaments-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentsPagePageRoutingModule
  ],
  declarations: [TournamentsPagePage]
})
export class TournamentsPagePageModule {}
