import * as express from 'express';
import { markerAvail } from '@postedhere/calender'
import * as mongoose from 'mongoose'
import { Message, MarkerInfo, PersonAvailability, NewMarker, GetAllMarkers, MarkerInfoAPI, AvailableWhen } from '@postedhere/api-interfaces';
import { environment } from './environments/environment';
import { Marker } from './app/models/markers-model';
import { Availability } from './app/models/availability-model';
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import { type } from 'os';

/**
 * MONGO Connection
 */
mongoose.connect(`mongodb+srv://${environment.DB_USER}:${environment.DB_PASSWORD}@cluster0.bfyql.mongodb.net/${environment.DB}?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.info("Connected to mongo!")
});

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors())


function processMarker(marker: MarkerInfo): MarkerInfoAPI {
  const markerAPI = marker.toObject()
  return { ...markerAPI}
}

app.get('/api_v1/all-markers', async (req, res, next) => {
  // TODO transfer filtering to MongoDB
  const allMarkers = (await Marker.find({}).populate('availabilities')) as MarkerInfo[]
  const markersFiltered = allMarkers.map(marker => processMarker(marker)).filter(marker => markerAvail(marker) !== AvailableWhen.PAST)
  res.status(200).json({
    markerInfos: markersFiltered
  } as GetAllMarkers)
})

app.post('/api_v1/marker', async (req, res, next) => {
  const newMarkerBody = (req.body as NewMarker).info
  const newAvails = await Availability.create(newMarkerBody.availabilities as PersonAvailability[])

  const newMarker = new Marker({
    ...newMarkerBody,
    availabilities: newAvails.map(avail => avail._id)
  } as MarkerInfo)
  await newMarker.save()
  res.status(204).json({})
})

const port = process.env.PORT || process.env.port || 3333;
const server = app.listen(port, () => {
  console.info('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
