const mongoose = require('mongoose');
require('dotenv').config();
// const mongoUrl = "mongodb://127.0.0.1:27017/Mydatabase"; // for local database
const mongoUrl = process.env.DB_URL;
mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("connected", () => {
    console.log("MongoDB Connected");
});

db.on("error", () => {
    console.log("MongoDB Connection error");
});

db.on("disconnected", () => {
    console.log("MongoDB disconnected");
});

module.exports = db;