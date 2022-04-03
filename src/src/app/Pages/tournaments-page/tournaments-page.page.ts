import { Component, OnInit } from '@angular/core';
import { Cities, City } from 'src/app/models/Cities';

@Component({
  selector: 'app-tournaments-page',
  templateUrl: './tournaments-page.page.html',
  styleUrls: ['./tournaments-page.page.scss'],
})
export class TournamentsPagePage implements OnInit {

  cities = Cities.Data;
  city: City;

  constructor() { }

  ngOnInit() {
  }
}
