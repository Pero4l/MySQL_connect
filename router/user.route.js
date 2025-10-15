const express = require('express');
const router = express.Router();
const { createUser, getAllUsers } = require('../controllers/usersController');

router.post('/register', createUser);
router.get('/getall', getAllUsers)

module.exports = router;
