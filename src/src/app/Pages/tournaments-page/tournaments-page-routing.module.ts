import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TournamentsPagePage } from './tournaments-page.page';

const routes: Routes = [
  {
    path: '',
    component: TournamentsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TournamentsPagePageRoutingModule {}
