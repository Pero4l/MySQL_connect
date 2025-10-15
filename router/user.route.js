const express = require('express');
const router = express.Router();
const { createUser } = require('../controllers/usersController');

router.post('/register', createUser);

module.exports = router;
