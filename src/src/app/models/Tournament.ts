import { Guid } from "guid-typescript";
import { City } from "./Cities";
import { RoofTrackingRecords } from "./RoofTrackingRecords";

export class Tournament {
  Id: string = Guid.create().toString();
  Name: string;
  UniqueCode: number;
  City: City;
  IsPublic: boolean;
  NumberOfBirds: number;
  IsFixedBirds: boolean;
  TrackingRecords: RoofTrackingRecords[];
  StartDate: Date;
  EndDate: Date;
  CreatedAt: Date;
  UpdatedAt: Date;
}
