const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


const userSchema = mongoose.Schema({
    firstname:{
       type: String,
       require: true,
       minlenght:[3, 'First name must be at least 3 characters long'] 
    },
      lastname:{
       type: String,
       minlenght:[3, 'Last name must be at least 3 characters long'] 
    },
    email:{
        type: String,
        require: true,
        unique: true,
        minlenght: [5, "Email must be at least 5 characters long"]
    },
    password:{
      type: String,
      require: true,
      select: false
    },
    socketId:{
        type:String,
    },

})

userSchema.methods.generateAuthToken = function (){
    const token = jwt.sign({_id : this._id}, process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}
userSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const userModel = mongoose.model('user', userSchema);

module.exports= userModel; 