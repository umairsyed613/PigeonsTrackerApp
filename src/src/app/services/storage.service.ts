import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(key: string, value: any) {
    return this._storage?.set(key, value);
  }

  public get(key) {
    return this._storage?.get(key);
  }

  public remove(key) {
    return this._storage?.remove(key);
  }
}
