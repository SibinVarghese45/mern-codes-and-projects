const express = require('express');

const app = express();

require('dotenv').config();
const PORT = process.env.PORT;

// middleware 
const cookieParser = require('cookie-parser');
app.use(cookieParser);

app.use(express.json());

// database connection
const dbConnect = require('./config/db')
dbConnect();

// routes import and export
const user = require('./routes/user')
app.use('/api/v1', user)

app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})