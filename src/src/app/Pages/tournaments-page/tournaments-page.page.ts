import { Component, OnDestroy, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ModalController, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { UpsertTournamentComponent } from 'src/app/components/upsert-tournament/upsert-tournament.component';
import { Cities, City } from 'src/app/models/Cities';
import { FavTournament, Tournament, TournamentItem } from 'src/app/models/Tournament';
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

  constructor(private modalController: ModalController, private dataService: DataService, private storageServ: StorageService,
    private toastController: ToastController) { }

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

  async showUpsertTournament(key) {
    const modal = await this.modalController.create({
      component: UpsertTournamentComponent,
      breakpoints: [0, 0.5, 0.8, 1],
      initialBreakpoint: 0.8,
      showBackdrop: true,
      backdropDismiss: false,
      componentProps: {
        'key': key
      }
    });
    modal.onDidDismiss().then(async (e) => {
      await this.handleModalClose(e, key);
    });
    return await modal.present();
  }

  async handleModalClose(e, key) {
    console.log(e);
    if (e.data != undefined && e.data[1] === true) {
    }
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
    let index = this.favTournamanetIds.findIndex(f => f.id == id);
    if (index >= 0) {
      this.favTournamanetIds.splice(index, 1);
      msg = 'Favourite removed!';
    }
    else {
      this.favTournamanetIds.push(<FavTournament>{ id: id, name: name });
      msg = 'Added to favourites!';
    }

    this.storageServ.set(fav_tournament_key, this.favTournamanetIds);
    const toast = await this.toastController.create({
      duration: 1000,
      message: msg
    });

    await toast.present();
  }

  isFav(id) {
    return this.favTournamanetIds.findIndex(f => f.id == id) >= 0
  }
}
