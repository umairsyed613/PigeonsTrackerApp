import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FacebookLogin } from '@capacitor-community/facebook-login';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user$: Observable<any>;

  fbImageUrl: string;

  constructor(public auth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    this.user$ = this.auth.user;
    this.user$.subscribe(u => {
      //console.log(u);
      this.fbImage(u.providerData[0].providerId).then(d => {
        this.fbImageUrl = d?.picture?.data.url;
      });
    });
  }

  async fbImage(provider) {
    if (provider != 'facebook.com') {
      return null;
    }
    const result = await FacebookLogin.getProfile<{ picture: string; }>({ fields: ['picture.width(64)'], }).catch(() => undefined);
    if (result === undefined) {
      return null;
    }

    //console.log(result);
    return result;
  }

  logout() {
    return this.auth.signOut().then(() => {
      this.router.navigate(['home']);
    })
  }
}
