const express = require("express");
const {getPosts,createPost, listPosts, putPosts} = require('../controllers/post');
const validator = require('../validator/index');

const router = express.Router();

//router.get('/', getPosts)
router.get('/post/:id', getPosts)
router.post('/post', createPost)
router.get('/post', listPosts)
router.put('/post/:id', putPosts)

module.exports = router;