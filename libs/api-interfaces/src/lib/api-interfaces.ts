import * as mongoose from 'mongoose'

export enum AvailableWhen {
  PAST,
  PRESENT,
  FUTURE,
}

export interface PersonAvailability extends mongoose.Document {
  name: string;
  startTime: Date;
  endTime: Date;
}

export interface MarkerInfoAPI {
  lat: number;
  lng: number;
  availabilities: PersonAvailability[] | mongoose.Schema.Types.ObjectId[] | string[];
}
export interface MarkerInfo extends mongoose.Document, MarkerInfoAPI{
}

export interface Message {
  message: string;
}

/**
 * Begin API Endpoint Interface
 */

export interface NewMarker {
  info: MarkerInfo
}

export interface GetAllMarkers {
  markerInfos: MarkerInfoAPI[]
}