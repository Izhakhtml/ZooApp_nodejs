const express = require('express').Router();
const User = require('../controllers/Users-controller');
express.post('/register',User.register)
express.post('/login',User.login)
module.exports = express;
