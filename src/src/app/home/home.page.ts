import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MyAppState } from '../app.global';
import { LanguageSelectorComponent } from '../components/language-selector/language-selector.component';
import { AdmobService } from '../services/admob.service';
import { App, AppInfo } from '@capacitor/app';
import { Capacitor } from '@capacitor/core';
import { DataService } from '../services/data.service';
import { Tournament } from '../models/Tournament';
import { Cities } from '../models/Cities';
import { User } from '../models/user';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit {

  cachedTournmanets: Map<string, Tournament> = new Map<string, Tournament>();
  cachedUser: Map<string, User> = new Map<string, User>();
  allUsers$: Observable<User[]>;
  pageState: any;

  counter: number = 0;

  constructor(private adService: AdmobService, private modalController: ModalController, private router: Router,
    public global: MyAppState, private dataServ: DataService) {
  }

  ionViewWillEnter() {
    //console.log('showing ad');
    this.adService.ShowBannerAd();
  }

  ngAfterViewInit(): void {
    try {
      if (Capacitor.isNativePlatform()) {
        //console.log('App plugin is available')
        App.getInfo().then((appInfo: AppInfo) => {
          this.global.set('version', appInfo.version);
        });
      }
    } catch (error) {
      // ignore
    }


  }

  goToProfile() {
    this.router.navigateByUrl('profile');
  }

  async showLanguageSelector() {

    const modal = await this.modalController.create({
      component: LanguageSelectorComponent
    });

    await modal.present();
  }

  async testTournament() {
    this.counter += 1;
    let t = new Tournament();
    t.Name = `Test Tournamane ${this.counter}`;
    t.IsPublic = true;
    t.City = Cities.Data[1];
    t.CreatedAt = new Date();
    this.dataServ.createTournament(t);
  }

  getTournaments() {
    //this.dataServ.cachedTournmanets.subscribe(s => console.log(s));
    this.dataServ.getTournaments().subscribe(s => console.log(s));
  }
  /*

  getTournaments() {
    this.dataServ.getData(5, this.pageState).subscribe((s: any) => {
      console.log(s);
      if (s.pageState != undefined) {
        this.pageState = s.pageState;
      }
      Object.keys(s.data).map((key) => {
        this.cachedTournmanets.set(key, s.data[key])
      });
      //console.log(this.cachedTournmanets);
    });

    //   this.dataServ.getData().subscribe(d => {
    //     console.log(d);
    //   });
  }

  deleteTournaments(key) {
    this.dataServ.deleteTournamentDocument(key);
    this.cachedTournmanets.delete(key);
  }

  deleteTournamentsCollection() {
    this.dataServ.deleteTournamentCollection();
  }

  registerUser() {
    this.dataServ.createUser({ Id: '', FullName: 'Waliya Syed', Email: 'waliya@gmail.com', Password: '', ProfileImage: '', DataProvider: 'PigeonsTracker' });
  }
  getUser() {
    this.dataServ.getUser('naqvi.umair@gmail.com').subscribe((res: any) => {
      let resp: User;
      console.log(res);

      Object.keys(res).map((key) => {
        this.cachedUser.set(key, res[key]);
      });

      res = this.cachedUser.keys.length > 0 ? this.cachedUser.entries() : null;
      console.log(this.cachedUser);
      console.log(resp);
    });
  }

  getAllUser() {

    this.allUsers$ = this.dataServ.getAllUser().pipe(
      tap(d => { console.log(`Raw `); console.log(d); }),
      map(data => {
        let u = new Map<string, User>();
        Object.keys(data).map(key => {
          u.set(key, data[key]);
        });

        return u;
      }),
      tap(d => { console.log(`Keys Map`); console.log(d); }),
      map(s => {
        let users: User[] = [];
        for (let [key, value] of s) {
          value.Id = key;
          users.push(value);
        }
        return users;
      }),
      tap(f => { console.log(`Final`); console.log(f); })
    );

    // this.dataServ.getAllUser().subscribe((res: any) => {
    //   console.log(res);

    //   Object.keys(res).map((key) => {
    //     this.cachedUser.set(key, res[key]);
    //   });
    //   console.log(this.cachedUser);
    // });
  }
  */
}
