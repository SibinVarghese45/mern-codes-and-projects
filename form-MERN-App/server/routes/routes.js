const express = require("express");

const router = express.Router();

// import controller
const {getDetails} = require('../controllers/getDetails');
const {addStudentDetails} = require('../controllers/addStudentDetails')

router.get('/getDetails', getDetails)
router.post('/add', addStudentDetails);

module.exports = router;