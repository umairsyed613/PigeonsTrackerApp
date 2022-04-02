import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Tournaments', url: '', icon: 'trophy' },
    { title: 'Practice', url: '', icon: 'walk' },
    { title: 'Diseases & Cure', url: '', icon: 'bandage' },
    { title: 'Information', url: '', icon: 'information' },
    { title: 'Contactus', url: '', icon: 'call' },
  ];

  constructor() {}
}
