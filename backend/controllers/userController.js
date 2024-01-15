// /controllers/userController.js
const User = require('../models/user');

exports.loginProfesor = (req, res) => {
    const { email, password } = req.body;

    User.login(email, password, (err, result) => {
        if (err) {
            // Gestionează eroarea
            res.status(500).send('Eroare internă de server');
        } else {
            if (result.valid) {
                // Autentificarea a avut succes
                res.status(200).json({ message: 'Autentificare reușită', user: result });
            } else {
                // Autentificarea a eșuat
                res.status(401).json({ message: 'Autentificare eșuată' });
            }
        }
    });
};


exports.loginStudent = (req, res) => {
    const { email, password, matriculationNumber } = req.body;
    
    User.login(email, password, matriculationNumber, (err, result) => {
        if (err) {
            res.status(500).send('Eroare la server');
            return;
        }
        if (result.valid) {
            res.send(`Bine ai venit studentule, ${result.userType}!`);
        } else {
            res.send('Date de autentificare incorecte.');
        }
    });
};