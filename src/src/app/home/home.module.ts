import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { DirectiveModule } from '../directives/directive.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModuleModule,
    DirectiveModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
