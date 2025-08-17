const captainModel = require("../models/captain.model");    
const captainService  = require("../services/captain.service");
const { validationResult } = require('express-validator');
const BlacklistTokenModel = require("../models/blacklistToken.model");

module.exports.registerCaptain = async (req, res, next) => {
  
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const { fullname, email, password, vehicle } = req.body;
    const  isCaptainAlreadyExists = await captainModel.findOne({ email });
    if (isCaptainAlreadyExists) {
        return res.status(400).json({ message: "Captain already exists" });
    }

    const hashedPassword = await captainModel.hashedPassword(password);

    const captain = await captainService.createCaptain({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        vehicleType: vehicle.vehicleType,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        color: vehicle.color
       
    });

    const token = captain.generateAuthToken();

    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict"
    }).json({ success: true });
}
module.exports.loginCaptain = async (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        return res.status(400).json({ error: error.array() });
    }
    const { email, password } = req.body;

    const captain = await captainModel.findOne({ email }).select('+password');
    if (!captain) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await captain.comparePassword(password);
    if (!isMatch) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = captain.generateAuthToken();
    
    res.cookie("token", token, {
        httpOnly: true,
        sameSite: "strict"
    }).json({ success: true });
}

module.exports.getCaptainProfile = async (req, res, next) => {
    res.status(200).json(req.captain);
}   
module.exports.logoutCaptain = async (req, res, next) => {
    res.clearCookie('token');
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    await BlacklistTokenModel.create({ token });

    res.clearCookie('token');
    
    res.status(200).json({ message: 'Logged out successfully' });
}