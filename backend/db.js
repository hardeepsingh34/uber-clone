const mongoose = require("mongoose");

function connectToDb(){
     mongoose.connect(process.env.DB_CONNECT)
     .then(()=>{
            console.log("connect to DB");
})
.catch(err => conosole.log(err));
}

module.exports = connectToDb;