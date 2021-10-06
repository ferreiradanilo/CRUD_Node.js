const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')

const routes = require('./src/routes.js')

const app = express()

mongoose.connect('mongodb://localhost:27017/MongoDb', {
    useUniFiedTopology: true,
    useNewUrlParser:true
}, function(err) {
    if (err) {
    console.log(err)
    } else {
        console.log('Mongo DB Conectado com Sucesso')
    }
    
})


app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)


app.listen(3003, function(){
    console.log("Servidor Iniciou com Sucesso")
})