import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'tournaments-page',
    loadChildren: () => import('./Pages/tournaments-page/tournaments-page.module').then( m => m.TournamentsPagePageModule)
  },
  {
    path: 'practice-page',
    loadChildren: () => import('./Pages/practice-page/practice-page.module').then( m => m.PracticePagePageModule)
  },
  {
    path: 'diseases-cure-page',
    loadChildren: () => import('./Pages/diseases-cure-page/diseases-cure-page.module').then( m => m.DiseasesCurePagePageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./Pages/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./Pages/contactus/contactus.module').then( m => m.ContactusPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
