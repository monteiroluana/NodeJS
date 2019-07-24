const express = require("express");
const {getPosts,createPost, listPosts} = require('../controllers/post');
const validator = require('../validator/index');

const router = express.Router();

router.get('/', getPosts)
router.post('/post', createPost)
router.get('/list', listPosts)

module.exports = router;