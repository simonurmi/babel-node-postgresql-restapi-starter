import dotenv from 'dotenv';
import { Pool } from 'pg';
import express from 'express';
import bodyParser from 'body-parser';
import exampleController from './src/controllers/exampleController';

dotenv.config();

const {
  DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD,
} = process.env;

const database = new Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
});

const router = express();

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get('/', (req, res) => {
  res.send({});
});

exampleController(router, database);

router.listen(3000, () => console.log('Example app listening on port 3000!'));
