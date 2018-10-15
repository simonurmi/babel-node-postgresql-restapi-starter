import express from 'express';
import { postgresql as database } from './src/config';
import exampleController from './src/controllers/exampleController';

const router = express();

router.get('/', (req, res) => {
  res.send({});
});

exampleController(router, database);

router.listen(3000, () => console.log('Example app listening on port 3000!'));
