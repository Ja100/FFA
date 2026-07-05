const express = require('express');
const router = express.Router();
const { test, registerUser, loginUser } = require('../Controllers/authController')


// middleware


// api endpoints
router.get('/', test)
router.post('/register', registerUser) // registerUser is a functions in Controller
router.post('/login', loginUser)

module.exports = router;