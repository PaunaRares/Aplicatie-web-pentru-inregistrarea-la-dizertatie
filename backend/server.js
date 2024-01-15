// server.js
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const corsOptions = {
  origin: 'http://localhost:3000', // Permite doar frontend-ul tău
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type'], // Adaugă aici alte antete necesare
};

app.use(cors(corsOptions));

const userRoutes = require('./routes/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rute
app.use('/user', userRoutes);

// Pornirea serverului
app.listen(port, () => {
    console.log(`Serverul rulează pe portul ${port}`);
});

// profesor: email: profesor@csie.ase.ro, parola: profesor123
// Student: email: student@stud.ase.ro, parola: student123, numar matricol: S0123CSIE.
