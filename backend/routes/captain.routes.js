const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/registor', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({ min: 3 }).withMessage(
        'Firstname must be at least 3 characters long'
    ),
    body('password').isLength({ min: 6 }).withMessage(
        'Password must be at least 6 characters long'
    ),
    body('vehicle.color').isLength({ min: 3 }).withMessage(
        'Vehicle color must be at least 3 characters long'
    ),
    body('vehicle.plate').isLength({ min: 3 }).withMessage(
        'Vehicle plate must be at least 3 characters long'
    ),
    body('vehicle.capacity').isInt({ min: 1 }).withMessage(
        'Vehicle capacity must be at least 1'
    ),
    body('vehicle.vehicleType').isIn(['car', 'bike', 'auto']).withMessage(
        'Vehicle type must be one of: car, bike, auto'
    )
], captainController.registerCaptain);    
router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body('password').isLength({ min: 6 }).withMessage(  
        'Password must be at least 6 characters long'
    )
], captainController.loginCaptain); 
 
router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile);
router.post('/logout', authMiddleware.authCaptain, captainController.logoutCaptain);

module.exports = router;