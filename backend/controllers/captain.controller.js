const captainModel = require("../models/captain.model");    
const captainService  = require("../services/captain.service");
const { validationResult } = require('express-validator');

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