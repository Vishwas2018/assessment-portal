// server/routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controller/authController');
const auth = require('../middleware/auth');

// Routes
router.post('/register', register);
router.post('/login', login);
router.get('/me', auth, getMe);

module.exports = router;