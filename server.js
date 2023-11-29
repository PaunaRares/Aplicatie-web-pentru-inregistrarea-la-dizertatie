const express = require('express');
const app = express();
const port = 5500;

app.use(express.json());

// Ruta GET pentru a returna un mesaj simplu
app.get('/', (req, res) => {
  res.send('Serviciu RESTful funcțional în Node.js');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  res.json(data);
});

app.listen(port, () => {
  console.log(`Serverul ascultă la http://localhost:${port}`);
});
