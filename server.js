const express = require('express');
const app = express();
const port = 5500;

// Middleware pentru a permite parsarea datelor JSON
app.use(express.json());

// Ruta GET pentru a returna un mesaj simplu
app.get('/', (req, res) => {
  res.send('Serviciu RESTful funcțional în Node.js');
});

// Ruta POST pentru a primi și returna date JSON
app.post('/api/data', (req, res) => {
  const data = req.body;
  // Aici poți procesa și returna datele după nevoie
  res.json(data);
});

// Pornirea serverului
app.listen(port, () => {
  console.log(`Serverul ascultă la http://localhost:${port}`);
});
