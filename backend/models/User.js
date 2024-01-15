// /models/User.js
const db = require('../database');

class User {
    static login(email, password, callback) {
        // Aici poți adăuga logica pentru a verifica utilizatorul în baza de date
        // Pentru exemplu, folosim autentificarea hardcoded
        if (email === 'profesor@csie.ase.ro' && password === 'profesor123') {
            callback(null, { userType: 'profesor', valid: true });
        } 
        else {
            callback(null, { valid: false });
        }
    }

    static login(email, password, matriculationNumber, callback) {

        if (email === 'student@stud.ase.ro' && password === 'student123' && matriculationNumber === 'S0123CSIE') {
            callback(null, { userType: 'student', valid: true });
        }
        else
        {
            callback(null, {valid: false});
        }

    }

}

module.exports = User;
