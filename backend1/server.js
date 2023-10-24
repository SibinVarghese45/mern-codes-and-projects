
// server instantiate
const express = require('express');
const app = express();

// used to parse req.body in express -> PUT OR POST
const bodyParser = require('body-parser');

// specifiacallly parse JSON data & add it to the request.body object
app.use(bodyParser.json())

// activate the server
app.listen(3000, () => {
    console.log("Server is running at 3000")
})

// routes
app.get('/', (req, res) => {
    res.send("Hello Jee, kaise ho saare")
})

app.post('/api/cars', (req, res) => {
  const {name, brand} = req.body;
  console.log(name, brand);
  res.send("Car submitted sucessfully")
})

app.use('/response', (req, res) => {
    res.send("Response Fetched")
})

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection SUccesfull")
}).catch((e) => {
    console.log(e)
})

