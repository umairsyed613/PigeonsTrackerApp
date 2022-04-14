import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Capacitor } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { Cities, City } from 'src/app/models/Cities';
import { FavTournament, TournamentItem } from 'src/app/models/Tournament';
import { DataService } from 'src/app/services/data.service';
import { StorageService } from 'src/app/services/storage.service';

const fav_tournament_key = 'fav_tournaments';
@Component({
  selector: 'app-tournaments-page',
  templateUrl: './tournaments-page.page.html',
  styleUrls: ['./tournaments-page.page.scss'],
})
export class TournamentsPagePage implements OnInit, OnDestroy {

  cities = Cities.Data;
  city: City;
  pageSize = 3;
  showLoadMoreBtn = false;
  showLoadMoreInfinite = false;
  favTournamanetIds: FavTournament[] = [];

  items$: Observable<TournamentItem[]>;
  loaded = false;

  private lastPageReachedSub: Subscription;

  data = [
    {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }
  ];

  constructor(private dataService: DataService, private storageServ: StorageService,
    private toastController: ToastController, private router: Router) { }

  ngOnInit() {
    this.showLoadMoreBtn = !Capacitor.isNativePlatform();
    this.showLoadMoreInfinite = Capacitor.isNativePlatform();
    this.loadData();
    this.storageServ.get(fav_tournament_key).then((res: FavTournament[]) => {
      if (res) {
        this.favTournamanetIds = res;
      }
    })
  }

  ngOnDestroy() {
    if (this.lastPageReachedSub) {
      this.lastPageReachedSub.unsubscribe();
    }
  }

  async loadData() {
    this.items$ = this.dataService.watchItems();

    this.dataService.initLoadTournaments();

    this.lastPageReachedSub = this.dataService.watchLastPageReached().subscribe((reached: boolean) => {
      if (reached && this.showLoadMoreBtn) {
        this.loaded = true;
        this.showLoadMoreBtn = false;
        this.showLoadMoreInfinite = false;
      }
    });
  }

  loadNextPage() {
    this.dataService.loadNextPageTournamanet();
  }

  loadMoreData(event$) {
    this.loadNextPage();
    event$.target.complete();
  }

  async addToFavorite(id, name) {
    //console.log(id);
    let msg = '';
    let buttons = [];
    let duration = 800;
    let icon = '';

    let index = this.favTournamanetIds.findIndex(f => f.id == id);
    if (index >= 0) {
      this.favTournamanetIds.splice(index, 1);
      msg = 'Favourite removed!';
      icon = 'heart-dislike'
    }
    else {
      this.favTournamanetIds.push(<FavTournament>{ id: id, name: name });
      icon = 'heart'
      msg = 'Added to favourites!';
      duration = 1500;
      buttons = [
        {
          side: 'start',
          text: 'View',
          handler: () => {
            this.router.navigateByUrl('my-tournaments');
          }
        }
      ]
    }

    this.storageServ.set(fav_tournament_key, this.favTournamanetIds);
    const toast = await this.toastController.create({
      icon: icon,
      duration: duration,
      message: msg,
      buttons: buttons
    });

    await toast.present();
  }

  isFav(id) {
    return this.favTournamanetIds.findIndex(f => f.id == id) >= 0
  }
}
