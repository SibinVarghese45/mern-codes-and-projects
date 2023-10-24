const mongoose = require('mongoose');

require('dotenv').config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection successfull")
    }).catch((e) => {
        console.log("Connection Unsuccessfull", e)
        process.exit(1);
    })
}

module.exports = connectWithDb;