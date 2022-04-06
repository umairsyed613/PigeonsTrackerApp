import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TournamentsPagePageRoutingModule } from './tournaments-page-routing.module';

import { TournamentsPagePage } from './tournaments-page.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { DirectiveModule } from 'src/app/directives/directive.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TournamentsPagePageRoutingModule,
    ComponentsModule,
    DirectiveModule
  ],
  declarations: [TournamentsPagePage]
})
export class TournamentsPagePageModule {}
