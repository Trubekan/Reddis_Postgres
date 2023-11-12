const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000; // Puedes ajustar el puerto según tu configuración

// Importar el código de conexión a PostgreSQL
const database = require('./database');

// Verificar que la solicitud tenga parámetros de consulta
app.get('/', (req, res) => {
  if (!req.query) {
    res.status(400).send('La solicitud no tiene parámetros de consulta');
    return;
  }

  // Acceder al objeto `query`
  const name = req.query.name;

  // Enviar una respuesta
  res.send(`Hola, ${name}!`);
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto:${port}`);
});