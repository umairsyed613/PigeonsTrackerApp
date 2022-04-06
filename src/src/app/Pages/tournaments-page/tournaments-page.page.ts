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

  data = [
    {
      Img: 'https://scontent.fosl3-2.fna.fbcdn.net/v/t39.30808-6/277579445_1000092450884252_6333116699645185561_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=ifQKzBTse7cAX9rBRGA&_nc_ht=scontent.fosl3-2.fna&oh=00_AT8fBMCNgI_XSxulSs57ghAxXDam89oub0QQMCnDDC8BNA&oe=62508CE6',
      Name: 'The Name of Tournament is very long',
      City: 'Lahore'
    },
    {
      Img: 'https://scontent.fosl3-1.fna.fbcdn.net/v/t39.30808-6/277747621_1596627200736828_939812777622566788_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=m7xr8fXiDIwAX_rUWXh&_nc_ht=scontent.fosl3-1.fna&oh=00_AT-7GHAqTywFIjs10yrEWW9fz_wa5sIqj7C-8zhJ1HEZvw&oe=625271B3',
      Name: 'Tournament Name',
      City: 'Lahore'
    },
    {
      Img: 'https://scontent.fosl3-1.fna.fbcdn.net/v/t39.30808-6/277747621_1596627200736828_939812777622566788_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=m7xr8fXiDIwAX_rUWXh&_nc_ht=scontent.fosl3-1.fna&oh=00_AT-7GHAqTywFIjs10yrEWW9fz_wa5sIqj7C-8zhJ1HEZvw&oe=625271B3',
      Name: 'Tournament Name',
      City: 'Lahore'
    },
    {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }, {
      Img: 'https://via.placeholder.com/180x220.png',
      Name: 'Tournament Name',
      City: 'Lahore'
    }
  ];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
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

  loadData(event$) {
    setTimeout(() => {
      console.log('Done');
      event$.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      // if (data.length === 1000) {
      //   event.target.disabled = true;
      // }
    }, 500);
  }

}
