import { Component } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Tournaments', url: '/tournaments-page', icon: 'trophy' },
    { title: 'Practice', url: '/practice-page', icon: 'walk' },
    { title: 'Diseases & Cure', url: '/diseases-cure-page', icon: 'bandage' },
    { title: 'Information', url: '/information', icon: 'information' },
    { title: 'Contactus', url: '/contactus', icon: 'call' },
  ];

  constructor() {}
}
