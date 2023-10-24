const express = require('express');
const router = express.Router();

const {dummyController} = require('../controllers/dummyController')
const {createComment} = require('../controllers/CommentController')


router.get('/dummyroute', dummyController);
router.post("/comments/create", createComment)


module.exports = router;