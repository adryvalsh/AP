const { Router } = require('express')

const {
    createPost,
    findPost,
    updatePost,
    deletePost,
    listPosts
} = require('../src/controllers/post.controllers')


const router = Router()

router.get('/',listPosts)
router.get('/:id',findPost)
router.post('/',createPost)
router.put('/:id',updatePost)
router.delete('/:id',deletePost)

module.exports = router