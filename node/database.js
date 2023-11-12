const { Pool } = require('pg');

// Conexión a PostgreSQL
const pool = new Pool({
  user: 'myuser',
  host: 'postgres',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

module.exports = pool;