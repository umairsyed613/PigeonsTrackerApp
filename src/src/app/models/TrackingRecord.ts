import { Guid } from "guid-typescript";
import { TimeSpan } from "./TimeSpan";

export class TrackingRecord {
  Id: string = Guid.create().toString();
  BirdName: string;
  NoLanded: boolean;
  Crossed: boolean;
  EndTime?: Date;
  TotalFlyingTime?: TimeSpan;
}


