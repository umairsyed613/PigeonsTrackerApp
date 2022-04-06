import { Injectable } from '@angular/core';
import { PTConfig } from '../models/config';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  config: PTConfig;

  constructor(private configService: ConfigService) {
    this.config = this.configService.GetConfig();
  }

  checkAndSetTheme() {

    if (this.config == undefined || this.config == null || this.config.Theme?.length <= 0) {
      this.setTheme('default');
    }
    else {
      this.setTheme(this.config.Theme);
    }

  }

  setTheme(themeName) {
    var classList = document.body.classList;
    while (classList.length > 0) {
      classList.remove(classList.item(0));
    }
    document.body.classList.add(themeName);
  }
}
