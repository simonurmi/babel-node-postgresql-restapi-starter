import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const {
  DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD,
} = process.env;

export default new Pool({
  host: DB_HOST,
  database: DB_DATABASE,
  port: DB_PORT,
  user: DB_USERNAME,
  password: DB_PASSWORD,
});
