import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UpsertTournamentComponent } from 'src/app/components/upsert-tournament/upsert-tournament.component';
import { Cities, City } from 'src/app/models/Cities';

@Component({
  selector: 'app-tournaments-page',
  templateUrl: './tournaments-page.page.html',
  styleUrls: ['./tournaments-page.page.scss'],
})
export class TournamentsPagePage implements OnInit {

  cities = Cities.Data;
  city: City;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async showUpsertTournament(key){
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

}
