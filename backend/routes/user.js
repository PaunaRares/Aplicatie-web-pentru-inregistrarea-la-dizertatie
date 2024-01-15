// /routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/login-profesor', userController.loginProfesor);
router.post('/login-student', userController.loginStudent);

module.exports = router;
