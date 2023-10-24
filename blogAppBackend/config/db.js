const mongoose = require('mongoose');

require('dotenv').config();
const db_url = process.env.DATABASE_URL;

const dbConn = () => {
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("server is connected to database")
    }).catch((e) => {
        console.log("Connection to db unsuccessfull", e)
    })
}

module.exports = dbConn;