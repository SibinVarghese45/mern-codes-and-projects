const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        UseNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Connection Successfull")
    }).catch((e) => {
        console.log("Connection Unsuccessfull", e)
        process.exit(1);
    })
}

module.exports = dbConnect;