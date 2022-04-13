import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyTournamentsPage } from './my-tournaments.page';

const routes: Routes = [
  {
    path: '',
    component: MyTournamentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyTournamentsPageRoutingModule {}
