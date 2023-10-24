const express = require('express');
const router = express.Router();

// import controllers
const {createBlog} = require('../controllers/createBlog')
const {getAllBlogs} = require('../controllers/getAllBlogs')

router.post('/createBlog', createBlog);
router.get('/allBlogs', getAllBlogs);

module.exports = router;