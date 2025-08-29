const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const cors = require('cors');
const cookieparser = require('cookie-parser');
const app = express();
const connectToDb = require("./db/db")
const userRoutes = require("./routes/user.routes")
const captainRoutes = require("./routes/captain.routes");

connectToDb();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}))
app.use(cookieparser()); 

app.get('/',(req, res)=>{
    res.send("hello world");
})
app.use("/user", userRoutes);
app.use("/captain",  captainRoutes);
module.exports = app;

// PORT = 4000
// DB_CONNECT = mongodb://0.0.0.0/uber-clone
// JWT_SECRET=user-vedio-secret 
// GOOGLE_MAPS_API=AIzaSyCsVu4ewaRjDPGUgTL2Kp_pv40FYxYu19s