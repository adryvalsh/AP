const { Router } = require('express')

const {
    
    listPosts,
    formCreatePost,
    createPost,
    formUpdatePost,
    updatePost,
    deletePost
} = require('../src/controllers/post.controllers')


const router = Router();

router.get('/',listPosts)
router.get('/new',formCreatePost)
router.post('/',createPost)
router.get('/update/:id',formUpdatePost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)

module.exports = router;