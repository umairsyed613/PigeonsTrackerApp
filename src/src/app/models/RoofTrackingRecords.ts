import { Guid } from "guid-typescript";
import { TimeSpan } from "./TimeSpan";
import { TrackingRecord } from "./TrackingRecord";

export class RoofTrackingRecords {
  Id: string = Guid.create().toString();
  RoofName: string;
  Records: TrackingRecord[];
  TotalFlyingTimeAllBirds: TimeSpan;
  CreatedAt: Date;
  UpdatedAt: Date;
}
