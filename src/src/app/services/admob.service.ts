import { Injectable } from '@angular/core';
import { AdMobPlus, BannerAd, InterstitialAd } from '@admob-plus/capacitor'
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdmobService {

  banner: BannerAd;
  bannerShown = false;

  constructor() {
    if (environment.production) {
      this.banner = new BannerAd({
        adUnitId: environment.bannerId,
        position: 'bottom'
      });
    }
  }

  async ShowBannerAd() {
    if (environment.production === false) { return; }

    if (this.bannerShown) {
      return;
    }

    //console.log('showing banner');
    await this.banner.show();

    AdMobPlus.addListener('banner.impression', async () => {
      this.bannerShown = true;
    })
  }

  async HideBannerAd() {
    if (this.bannerShown) {
      await this.banner.hide();
    }

    this.bannerShown = false;
  }
}
