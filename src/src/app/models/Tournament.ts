import { DocumentReference } from "@angular/fire/compat/firestore";
import { City } from "./Cities";
import { RoofTrackingRecords } from "./RoofTrackingRecords";

export class Tournament {
  UserId: string;
  Name: string;
  UniqueCode: number = Math.floor(100000 + Math.random() * 900000);
  City: City;
  IsPublic: boolean;
  NumberOfBirds: number;
  IsFixedBirds: boolean;
  TrackingRecords: RoofTrackingRecords[];
  StartDate: Date;
  EndDate: Date;
  PosterImage: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}

export interface TournamentItem {
  id: string;
  ref: DocumentReference;
  data: Tournament;
  fromCache: boolean;
}

export interface FavTournament {
  id: string;
  name: string;
}
