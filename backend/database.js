// /config/database.js
const mysql = require('mysql');
require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error('Eroare la conectarea la baza de date:', err);
        return;
    }
    console.log('Conectat cu succes la baza de date!');
});

module.exports = db;
