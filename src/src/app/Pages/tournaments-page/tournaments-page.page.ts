import { Component, OnInit } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { UpsertTournamentComponent } from 'src/app/components/upsert-tournament/upsert-tournament.component';
import { Cities, City } from 'src/app/models/Cities';
import { Tournament } from 'src/app/models/Tournament';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-tournaments-page',
  templateUrl: './tournaments-page.page.html',
  styleUrls: ['./tournaments-page.page.scss'],
})
export class TournamentsPagePage implements OnInit {

  cities = Cities.Data;
  city: City;
  pageSize = 5;
  cursor: any;
  showLoadMoreBtn = false;

  tournaments = new BehaviorSubject([]);
  data = [
    {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }
  ];

  constructor(private modalController: ModalController, private dataService: DataService) { }

  ngOnInit() {
    this.showLoadMoreBtn = !Capacitor.isNativePlatform();
    this.loadData();
  }

  loadData() {
    this.dataService.getPagedTournaments(this.pageSize).subscribe(s => this.tournaments.next(s));
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

  loadMoreData(event$) {
    setTimeout(() => {
      console.log('Done');
      this.loadData();
      event$.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

}
