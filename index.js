const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize }= require('./database')
require("./src/models/Post")
const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())
app.use(morgan('dev'))

// direcion donde estara la carpeta views
app.set('views', __dirname + '/src/views');
// direcion donde estara la carpeta public
app.use(express.static("public"));

// cofiguracion del motor de plantillas
app.set('view engine', 'ejs');


//routes
app.use('/post', require('./routes/post.routes'))


//configs
app.listen(4000, () =>{
    sequelize.sync()
        .then(()=> console.log("DB is conected"))
        .catch(err => console.log(err))
    console.log("Server on port 4000")
})