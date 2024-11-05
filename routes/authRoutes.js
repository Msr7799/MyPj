const express = require('express');
const router = express.Router();
const authController = require('./controllers/authController');

// Sign up a new user
router.post('/signup', authController.signUp);

// Sign in an existing user
router.post('/signin', authController.signIn);

// Optionally add a route for getting the currently authenticated user
router.get('/me', authController.getCurrentUser);

module.exports = router;
