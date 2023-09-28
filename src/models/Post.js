/*
Post
title
content
link

*/
const{sequelize}=require('../../database')
const{DataTypes} = require('sequelize')

const PostModel = sequelize.define('posts',{
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    link: DataTypes.STRING,
});

module.exports = {PostModel};