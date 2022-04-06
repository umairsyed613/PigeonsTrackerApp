import { Injectable } from '@angular/core';
import { PTConfig } from '../models/config';

const Config_Key = 'Config_Items';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  GetConfig(): PTConfig {
    return JSON.parse(localStorage.getItem(Config_Key));
  }

  UpdateConfig(config: PTConfig) {
    localStorage.setItem(Config_Key, JSON.stringify(config));
  }
}
