const mongoose = require("mongoose");

const BlacklistTokenSchema = mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    createdAt:{
        type:Date,
        Default: Date.now,
        expires: 86400 // 24 hours in seconds
    }
});

module.exports = mongoose.model('BlacklistToken', BlacklistTokenSchema); 