const captainModel = require("../models/captain.model");


module.exports.createCaptain = async ({
    firstname, lastname, email, password, color,plate, capacity, vehicleType
}) => {
    if (!firstname || !email || !password || !vehicleType || !plate || !capacity || !color) {
        throw new Error("All Fields are required");
    }
    const captain = await captainModel.create({
     fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle:{
            color: "defaultColor", // Assuming a default color, can be modified
            plate,
            capacity: 4, // Assuming a default capacity, can be modified
            vehicleType: vehicleType
        }
    });
    return captain;
}       