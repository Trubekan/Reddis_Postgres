const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000; // Puedes ajustar el puerto según tu configuración

const pool = new Pool({
  user: 'myuser',
  host: 'postgres',
  database: 'mydatabase',
  password: 'mypassword',
  port: 5432,
});

app.get('/', (req, res) => {
  // Verificar la conexión
  pool.query('SELECT NOW()', (err, result) => {
    if (err) {
      console.error('Error de conexión a la base de datos', err);
      res.status(500).send('Error de conexión a la base de datos');
    } else {
      console.log('Conexión exitosa a la base de datos');
      res.send(`Resultado de la consulta: ${result.rows[0].now}`);
    }
  });
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en http://localhost:${port}`);
});
