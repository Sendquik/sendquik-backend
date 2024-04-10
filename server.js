import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import chalk from 'chalk';
import cors from 'cors';
import { config as configDotenv } from 'dotenv'; // Changed to named import 'config'

import route from './Routes/index.js'; // Changed to import default export 'route'

// Load environment variables from .env file
configDotenv();

(async function () {
  try {
    mongoose.connect(process.env.dbConnection, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: false,
    });
    // console.log('The Database is ready to establish connection!!');
  } catch (error) {
    console.log(error);
    console.log('The Database did not Connect!!!');
  }

  await mongoose.connection.once('open', () => {
    console.log(chalk.green('Connection Succesfully Established Connection'));
  });
}());



const app = express();
const port = process.env.PORT || 5000;


app.use(cors());

app.use(express.json());

app.use('/api', route);

app.listen(port, () => {
    console.log(chalk.blue(`The server has started on port ${port}`));
});
