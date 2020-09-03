import * as mongoose from 'mongoose'
import { MarkerInfo } from '@postedhere/api-interfaces';

const markerSchema = new mongoose.Schema({
  availabilities: { type: [mongoose.Schema.Types.ObjectId], ref: 'Availability' }
  lat: { type: Number, required: true},
  lng: { type: Number, required: true },
});

const Marker = mongoose.model<MarkerInfo>('Marker', markerSchema)
export Marker