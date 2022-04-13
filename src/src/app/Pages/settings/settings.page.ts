import { AfterViewInit, Component } from '@angular/core';
import { PTConfig } from 'src/app/models/config';
import { ConfigService } from 'src/app/services/config.service';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements AfterViewInit {

  config: PTConfig;

  public themeColor = [
    { name: 'Default', class: 'default' },
    { name: 'Green', class: 'green' },
    { name: 'Gray', class: 'gray' },
    { name: 'Dark Gray', class: 'darkgray' },
    { name: 'Red', class: 'red' },
  ];

  constructor(private configServ: ConfigService, private themeService: ThemeService) { }

  ngAfterViewInit(): void {
    this.config = this.configServ.GetConfig();

    if (this.config === undefined || this.config === null) {
      this.config = this.getDefaultConfig();
    }
  }
  private getDefaultConfig(): PTConfig {
    return { Vibration: 'Light', Theme: 'Default' };
  }

  updateConfigInStorage() { this.configServ.UpdateConfig(this.config); }

  vibrationStyleChange(event$) {
    //console.log(event$);
    this.config.Vibration = event$.detail.value;
    this.updateConfigInStorage();
  }

  themeStyleChange(event$) {
    //console.log(event$);
    this.config.Theme = event$.detail.value;
    this.updateConfigInStorage();
    this.themeService.setTheme(this.config.Theme);
  }
}
