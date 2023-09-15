const{PostModel}=require('../models/Post')

async function createPost(req, res){
    const{ title, content, link } = req.body
    await PostModel.create({title,content,link})
    res.send('created Post')
}

async function findPost(req, res){
    const id= req.params.id
    const post = await PostModel.findByPk(id)
    res.json(post)
}

async function updatePost(req, res){
    const id= req.params.id
    const { title, content, link }= req.body
    await PostModel.update({title, content, link}, {
        where: {
            id: id
        }
    })
    res.json(post)
}

async function deletePost(req, res){
    const id= req.params.id
    await PostModel.destroy({
        where:{
            id: id
        }
    })
    res.send('deleted Post')
}

async function listPosts(req, res){
    const allPosts = PostModel.findAll()
    res.json(allPosts)
}

module.exports = {
    createPost,
    findPost,
    updatePost,
    deletePost,
    listPosts
}