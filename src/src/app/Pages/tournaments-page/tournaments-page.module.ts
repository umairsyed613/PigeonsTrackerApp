import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { TournamentsPagePageRoutingModule } from './tournaments-page-routing.module';

import { TournamentsPagePage } from './tournaments-page.page';
import { ComponentsModule } from 'src/app/components/components.module';

import { SharedModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
    TournamentsPagePageRoutingModule,
    ComponentsModule,
  ],
  declarations: [TournamentsPagePage]
})
export class TournamentsPagePageModule {}
