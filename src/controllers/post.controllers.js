//const { NOT } = require('sequelize/types/deferrable');
const{PostModel}=require('../models/Post')

const listPosts = async(req, res)=>{
    const allPosts = await PostModel.findAll();
    res.render("index",{allPosts})
};

const formCreatePost = async(req, res)=>{
    res.render('new');
}

const createPost = async(req, res)=>{
    const{ title, content, link } = req.body
    await PostModel.create({title,content,link});
    res.redirect('post');
}
/*
const findPost = async(req, res)=>{
    const id= req.params.id
    const post = await PostModel.findByPk(id)
    res.json(post)
}*/

const formUpdatePost = async(req, res)=>{
    const id= req.params.id
    const post = await PostModel.findByPk(id)
    if (!post){ return res.redirect('/post')}
    res.render('update',{post})
}

const updatePost = async(req, res)=>{
    const id= req.params.id
    const { title, content, link }= req.body
    await PostModel.update({title, content, link}, {
        where: {
            id: id
        }
    })
    res.json(post)
}

const deletePost = async(req, res)=>{
    const id= req.params.id
    await PostModel.destroy({
        where:{
            id: id
        }
    })
    res.send('deleted Post')
}

module.exports = {
    
    listPosts,
    formCreatePost,
    createPost,
    formUpdatePost,
    updatePost,
    deletePost
}