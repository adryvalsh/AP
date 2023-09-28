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

const formUpdatePost = async(req, res)=>{
    const id= req.params.id
    const post = await PostModel.findByPk(id)
    if (!post){ return res.redirect('/post')}
    res.render('update',{post})
}

const updatePost = async(req, res)=>{
    const {id, title, content, link }= req.body
    const post = await PostModel.findByPk(id)
    await post.update({title, content, link })
    res.redirect("/post")
}

const deletePost = async(req, res)=>{
    const id= req.params.id
    const post = await PostModel.findByPk(id)
    await post.destroy({
        where:{
            id: id
        }
    })
    res.redirect("/post")
}

module.exports = {
    
    listPosts,
    formCreatePost,
    createPost,
    formUpdatePost,
    updatePost,
    deletePost
}