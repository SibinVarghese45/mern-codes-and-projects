const express = require('express');
const router = express.Router();

const {createBlogs} = require('../controllers/createBlogs')
// const {getBlogs} = require('../controllers/getBlogs')

router.post('/createBlog', createBlogs)
// router.get('/getRoutes', getBlogs);

module.exports = router;