import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseasesCurePagePageRoutingModule } from './diseases-cure-page-routing.module';

import { DiseasesCurePagePage } from './diseases-cure-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseasesCurePagePageRoutingModule
  ],
  declarations: [DiseasesCurePagePage]
})
export class DiseasesCurePagePageModule {}
