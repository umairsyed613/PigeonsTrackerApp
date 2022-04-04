import { Injectable } from '@angular/core';
import { StatusBar, Style } from '@capacitor/status-bar';

@Injectable({
  providedIn: 'root'
})
export class StatusbarService {

  constructor() { }

  setLightStatusBar() {
    StatusBar.setBackgroundColor({ color: '#ffffff' }).catch(() => { });
    StatusBar.setStyle({ style: Style.Light }).catch(() => { });
  }

  setDarkStatusBar() {
    StatusBar.setBackgroundColor({ color: '#1f1f1f' }).catch(() => { });
    StatusBar.setStyle({ style: Style.Dark }).catch(() => { });
  }
}
