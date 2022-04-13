import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyTournamentsPageRoutingModule } from './my-tournaments-routing.module';

import { MyTournamentsPage } from './my-tournaments.page';
import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    MyTournamentsPageRoutingModule
  ],
  declarations: [MyTournamentsPage]
})
export class MyTournamentsPageModule {}
