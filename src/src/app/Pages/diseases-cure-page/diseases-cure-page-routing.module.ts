import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseasesCurePagePage } from './diseases-cure-page.page';

const routes: Routes = [
  {
    path: '',
    component: DiseasesCurePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseasesCurePagePageRoutingModule {}
