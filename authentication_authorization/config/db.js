const mongoose = require("mongoose");

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {console.log("Connected successfull")}).catch(e => console.log("Connection unsuccessfull", e))
}

module.exports = dbConnect;