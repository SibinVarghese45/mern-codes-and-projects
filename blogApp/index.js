const express = require('express');

// server instantiate
const app = express();

// middleware
app.use(express.json())

// port import
require('dotenv').config()
const port = process.env.PORT || 4000;


const blogroutes = require('./routes/blogRoutes')
app.use('/app/v1', blogroutes)

const dbConnect = require('./config/db')
dbConnect();

// setting up routes
const blogRoutes = require('./routes/blogRoutes');

// server start
app.listen(port, () => {
    console.log(`Server is running at ${port}`)
})

// default route
app.get('/', (req, res) => {
    res.send("<h1>Hello</h1>")
})
