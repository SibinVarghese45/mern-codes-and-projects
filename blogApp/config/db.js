const mongoose = require("mongoose")

require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection Sucessfull")
    }).catch((e) => {
        console.log("Connection Unsucessfull", e)
    })
}

module.exports = dbConnect;