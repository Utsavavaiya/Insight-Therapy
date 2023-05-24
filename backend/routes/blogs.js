const express = require('express')
const {createBlog, updateBlog, deleteBlog, getBlogs} = require('../controllers/blogController')
const router = express.Router()

const Blog = require('../models/blogModel')

// get all blogs
router.get('/', getBlogs)

// create and post a new blog
router.post('/',createBlog)

// delete a new blog
router.delete('/:id', deleteBlog)

// update a new blog
router.patch('/:id', updateBlog);

module.exports = router;
