const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

const {sequelize }= require('./database')
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))

//routes
app.use('/post', require('./routes/post.routes'))

//configs
app.listen(3000, () =>{
    sequelize.sync()
        .then(()=> console.log("DB is conected"))
        .catch(err => console.log(err))
    console.log("Server on port 3000")
})