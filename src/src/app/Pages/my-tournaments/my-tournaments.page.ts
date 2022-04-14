import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { FavTournament } from 'src/app/models/Tournament';
import { StorageService } from 'src/app/services/storage.service';
import { UpsertTournamentComponent } from 'src/app/components/upsert-tournament/upsert-tournament.component';

const fav_tournament_key = 'fav_tournaments';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.page.html',
  styleUrls: ['./my-tournaments.page.scss'],
})
export class MyTournamentsPage implements OnInit {

  favTournamanetIds: FavTournament[] = [];

  constructor(private modalController: ModalController,private storageServ: StorageService, private toasControler: ToastController) { }

  ngOnInit() {
    this.storageServ.get(fav_tournament_key).then((res: FavTournament[]) => {
      this.favTournamanetIds = res;
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

  async removeFav(id) {
    var i = this.favTournamanetIds.findIndex(f => f.id == id);
    if (i >= 0) {
      const toast = await this.toasControler.create({
        message: 'Removed from favourites!',
        duration: 800
      });
      await toast.present().then(_ => {
        this.favTournamanetIds.splice(i, 1);
        this.storageServ.set(fav_tournament_key, this.favTournamanetIds);
      });
    }
  }

}
