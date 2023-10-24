const express = require('express');

const app = express();

app.use(express.json())

require('dotenv').config();
const PORT = process.env.PORT || 4000;

const formRoutes = require('./routes/routes');
app.use('/api/v1', formRoutes)

const dbConnect = require('./config/db');
dbConnect();

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})

app.get('/', (req, res) => {
    res.send("Hello Sibin!")
})