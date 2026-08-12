const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'bookmark_db',
  user: 'postgres',
  password: process.env.PGPASSWORD || 'postgres'
});

module.exports = pool;