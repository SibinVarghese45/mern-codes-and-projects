const express = require('express');
const bodyParser = require('body-parser')

const app = express();

// middleware
app.use(express.json());

app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// all routes
const allRoutes = require('./routes/blogAppRoutes');
app.use('/app/v1', allRoutes)

// db connection
const dbConn = require('./config/db')
dbConn();

app.get('/', (req, res) => {
    res.send("<h1>Hello Sibin</h1>")
})

app.listen(3000, () => {
    console.log(`server is runnign at 3000`)
})

