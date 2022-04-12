import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { Capacitor } from '@capacitor/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform, ToastController } from '@ionic/angular';
import firebase from 'firebase/compat/app';

const FACEBOOK_PERMISSIONS = ['email'];

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  failureToast: any;

  isLoggedIn

  constructor(public auth: AngularFireAuth, private toastController: ToastController, private router: Router) { }

  async ngOnInit() {
    // GoogleAuth.initialize({
    //   clientId: '32162898136-napo9p7ncp2amip6t7p94egghtpno54u.apps.googleusercontent.com',
    //   scopes: ['profile', 'email'],
    //   grantOfflineAccess: true,
    // });

    this.failureToast = await this.toastController.create({
      message: 'Failed to login.',
      duration: 2000
    });

  }

  async loginFacebook() {
    if (Capacitor.isNativePlatform()) {
      const result = await FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

      if (result.accessToken) {
        // Login successful.
        //console.log(`Facebook access token is ${result.accessToken.token}`);
        //console.log(result);
        const fbCredential = firebase.auth.FacebookAuthProvider.credential(result.accessToken.token);
        this.auth.signInWithCredential(fbCredential).then(t => {
          //console.log(t);
          this.router.navigateByUrl('home');
        }).catch(err => {
          this.failureToast.present();
        });
      }
    } else {
      this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(t => {
        //console.log(t);
        this.router.navigateByUrl('home');
      }).catch(error => {
        //console.log(error);
        this.failureToast.present();
      });
    }
  }

  loginGoogle() {
    if (Capacitor.isNativePlatform()) {
      GoogleAuth.signIn().then(res => {
        //console.log(res);
        const googleCredential = firebase.auth.GoogleAuthProvider
          .credential(res.authentication.idToken);
        this.auth.signInWithCredential(googleCredential).then(t => {
          //console.log(t);
          this.router.navigateByUrl('home');
        }).catch(err => {
          this.failureToast.present();
        });
      });
    }
    else {
      this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(t => {
        //console.log(t);
        this.router.navigateByUrl('home');
      }).catch(error => {
        //console.log(error);
        this.failureToast.present();
      });
    }
  }
}
