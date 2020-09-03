import * as express from 'express';
import * as mongoose from 'mongoose'
import { Message } from '@postedhere/api-interfaces';
import { environment } from './environments/environment';

/**
 * MONGO Connection
 */
mongoose.connect(`mongodb+srv://${environment.DB_USER}:${environment.DB_PASSWORD}@cluster0.bfyql.mongodb.net/development?retryWrites=true&w=majority`);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected to mongo!")
});

const app = express();

app.get('/all-markers', (req, res, next) => {
  res.status(200).json({

  })
})

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
