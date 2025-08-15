const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

// User registration and login routes
// Validation is done using express-validator
// The registerUser and loginUser methods are defined in user.controller.js
// They handle the logic for registering and logging in users respectively
router.post('/registor',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage(
        'Firstname must be at least 3 characters long'
    )
],
userController.registerUser 
);

router.post('/login',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({min:6}).withMessage(
        'Password must be at least 6 characters long'
    )
],
userController.loginUser);

// Export the router to be used in the main app file
module.exports = router; 