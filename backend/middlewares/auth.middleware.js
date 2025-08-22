const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const BlacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    const blacklistToken = await BlacklistTokenModel.findOne({ token: token });
    if (blacklistToken) {
        return res.status(401).json({ message: "Token is blacklisted" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);
        
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console
    if (!token) {
        return res.status(401).json({ message: "Access denied, no token provided" });
    }

    const blacklistToken = await BlacklistTokenModel.findOne({ token: token });
    if (blacklistToken) {
        return res.status(401).json({ message: "Token is blacklisted" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);
        
        req.captain = captain;
        return next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid token" });
    }
}