import { Component } from '@angular/core';
import { AlertController, isPlatform, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusbarService } from './services/statusbar.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { MyAppState } from './app.global';
import { ThemeService } from './services/theme.service';
//import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { StorageService } from './services/storage.service';
//import {FacebookLogin} from "@capacitor-community/facebook-login";

const Language = 'lang';
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
    { title: 'Diseases & Cure', url: '/diseases-cure-page', icon: 'medkit' },
    { title: 'Information', url: '/information', icon: 'information' },
    { title: 'Preferences', url: '/settings', icon: 'settings' },
    { title: 'Contact', url: '/contactus', icon: 'call' },
  ];

  confirmationAlert: any;

  constructor(
    private platform: Platform,
    private location: Location,
    private alertController: AlertController,
    private route: Router,
    private statusBarServ: StatusbarService,
    public translate: TranslateService,
    public global: MyAppState,
    private themeServ: ThemeService,
    private storageServ: StorageService
  ) {
    this.themeServ.checkAndSetTheme();
    var lang = localStorage.getItem(Language);
    if (lang != undefined) {
      translate.use(lang);
    }

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      // this.toastCtrl.create({message: `Current Language: ${event.lang}`, duration: 1000, animated: true, color: 'primary'}).then(t => t.present());
      //console.log(event);
      localStorage.setItem(Language, event.lang);
    });

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      SplashScreen.hide();
      this.statusBarServ.setLightStatusBar();
      this.backbuttonSubscribeMethod();
      this.storageServ.init();

      // if (!isPlatform('capacitor')) {
      //   console.log(`Initializing Google auth for web`);
        // GoogleAuth.initialize({
        //   clientId: '32162898136-napo9p7ncp2amip6t7p94egghtpno54u.apps.googleusercontent.com',
        //   scopes: ['profile', 'email'],
        //   grantOfflineAccess: true,
        // });
        // console.log(`Initializing Facebook auth for web`);
        // FacebookLogin.initialize({appId: '558271395544477'});
      //}
    });
  }


  backbuttonSubscribeMethod() {
    App.addListener('backButton', () => {
      if (this.location.isCurrentPathEqualTo('/home')) {
        //console.log('Route Url : ' + this.route.url + ' , CanGoBack: ' + handler.canGoBack);
        this.showExitConfirm();
      } else {
        this.location.back();
      }
    });
  }

  async showExitConfirm() {
    if (this.confirmationAlert != undefined || this.confirmationAlert != null) {
      this.confirmationAlert.dismiss();
    }
    this.confirmationAlert = await this.alertController.create({
      header: 'App termination',
      message: 'Do you want to close the app?',
      backdropDismiss: false,
      buttons: [{
        text: 'Stay',
        role: 'cancel',
        handler: () => {
          console.log('Application exit prevented!');
          this.route.navigateByUrl('./home');
        }
      }, {
        text: 'Exit',
        handler: () => {
          App.exitApp();
        }
      }]
    });

    await this.confirmationAlert.present();
  }
}
