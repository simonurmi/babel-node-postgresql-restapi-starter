import { Pool } from 'pg';

export default new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'ranking',
  password: 'postgres',
  port: 5432,
});
