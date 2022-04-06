import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MyAppState } from '../app.global';
import { LanguageSelectorComponent } from '../components/language-selector/language-selector.component';
import { AdmobService } from '../services/admob.service';
import { App, AppInfo } from '@capacitor/app';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  constructor(private adService: AdmobService, private modalController: ModalController, private router: Router,
    public global: MyAppState) {
  }

  ionViewWillEnter() {
    //console.log('showing ad');
    this.adService.ShowBannerAd();
  }

  ngAfterViewInit(): void {
    try {
      App.getInfo().then((appInfo: AppInfo) => {
        this.global.set('version', appInfo.version);
      });
    } catch (error) {
      // ignore
    }


  }

  goToSettings() {
    this.router.navigateByUrl('settings');
  }

  async showLanguageSelector() {

    const modal = await this.modalController.create({
      component: LanguageSelectorComponent
    });

    await modal.present();
  }
}
