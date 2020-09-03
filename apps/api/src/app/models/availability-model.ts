import * as mongoose from 'mongoose'
import { PersonAvailability } from '@postedhere/api-interfaces';

const availSchema = new mongoose.Schema({
  name: { type: String, required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date, require: true },
});

export const Availability = mongoose.model<PersonAvailability>('Availability', availSchema)
