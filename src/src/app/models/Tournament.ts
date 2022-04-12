import { City } from "./Cities";
import { RoofTrackingRecords } from "./RoofTrackingRecords";

export class Tournament {
  DocId?: string;
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
