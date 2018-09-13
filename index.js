import express from 'express';
import { postgres as db } from './db';
import exampleController from './controllers/exampleController';

const router = express();

router.get('/', (req, res) => {
  res.send({});
});

exampleController(router, db);

router.listen(3000, () => console.log('Example app listening on port 3000!'));
