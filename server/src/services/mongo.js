const mongoose = require('mongoose')

require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL || "mongodb+srv://admin:admin@cluster0.m3uh4uj.mongodb.net/?retryWrites=true&w=majority";


mongoose.connection.once('open', () => {
    console.log("Mongdb connection ready")
});

mongoose.connection.on('error', (err) => {
    console.error(err);
  });

async function mongoConnection() {
    console.log(MONGO_URL);
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnection,
    mongoDisconnect
}