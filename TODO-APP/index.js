// const express = require('express');
// const app = express();


// app.listen(3000, () => {
//     console.log("Server is running at 3000")
// })


const express = require('express');

const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000

// data parser i.e middleware to pass json request body
app.use(express.json());

// Import routes for TODO API
const todoroutes = require('./routes/todos');

// mount tho todo api routes
app.use("/api/v1", todoroutes)

app.listen(PORT, () => {
    console.log("Server is running at", PORT);
})

// connect to database
const dbConnect = require('./config/database')
dbConnect();


// default route
app.get("/", (req, res) => {
    res.send('<h1> THis is homepage  <h1>')
})


