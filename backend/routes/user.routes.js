const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userController = require('../controllers/user.controller');

router.post('/registor',[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min:3}).withMessage(
        'Firstname must be at least 3 characters long'
    )
],
userController.registerUser 
)

module.exports = router; 