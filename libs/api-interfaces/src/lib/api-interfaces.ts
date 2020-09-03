import * as mongoose from 'mongoose'

export interface PersonAvailability extends mongoose.Document {
  name: string;
  startTime: Date;
  endTime: Date;
}

export interface MarkerInfo extends mongoose.Document {
  lat: number;
  lng: number;
  availabilities: PersonAvailability[] | string[] | mongoose.Schema.Types.ObjectId[];
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
  markerInfos: MarkerInfo[]
}