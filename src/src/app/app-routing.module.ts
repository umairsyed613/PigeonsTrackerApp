import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/splash',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'splash',
    loadChildren: () => import('./splash/splash.module').then( m => m.SplashPageModule)
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
  {
    path: 'settings',
    loadChildren: () => import('./Pages/settings/settings.module').then( m => m.SettingsPageModule)
  },

  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
