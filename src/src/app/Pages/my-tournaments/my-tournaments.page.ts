import { Component, OnInit } from '@angular/core';
import { FavTournament } from 'src/app/models/Tournament';
import { StorageService } from 'src/app/services/storage.service';

const fav_tournament_key = 'fav_tournaments';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.page.html',
  styleUrls: ['./my-tournaments.page.scss'],
})
export class MyTournamentsPage implements OnInit {

  favTournamanetIds: FavTournament[] = [];

  constructor(private storageServ: StorageService) { }

  ngOnInit() {
    this.storageServ.get(fav_tournament_key).then((res: FavTournament[]) => {
      this.favTournamanetIds = res;
    })
  }

  removeFav(id) {
    var i = this.favTournamanetIds.findIndex(f => f.id == id);
    if (i >= 0) {
      this.favTournamanetIds.splice(i, 1);
      this.storageServ.set(fav_tournament_key, this.favTournamanetIds);
    }
  }

}
