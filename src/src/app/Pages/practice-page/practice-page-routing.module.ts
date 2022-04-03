import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticePagePage } from './practice-page.page';

const routes: Routes = [
  {
    path: '',
    component: PracticePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticePagePageRoutingModule {}
