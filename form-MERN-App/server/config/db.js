const mongoose = require('mongoose');

require('dotenv').config();
const DATABASE_URL = process.env.DATABASE_URL;

const dbConnect = () => {
    mongoose.connect(DATABASE_URL, {
        useNewUrlParser:  true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection Successfull")
    }).catch((e) => {
        console.log("Connection unsuccessfull", e)
    })
}

module.exports = dbConnect;