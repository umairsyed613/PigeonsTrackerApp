import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LanguageSelectorComponent } from '../components/language-selector/language-selector.component';
import { AdmobService } from '../services/admob.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private adService: AdmobService, private modalController: ModalController) {
  }

  ionViewWillEnter() {
    //console.log('showing ad');
    this.adService.ShowBannerAd();
  }

  async showLanguageSelector() {

    const modal = await this.modalController.create({
      component: LanguageSelectorComponent
    });

    await modal.present();
  }
}
