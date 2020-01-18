const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-rdkf1.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

// app.use(cors({ origin: 'http://localhost:3000' }))
app.use(cors())
app.use(express.json())
app.use(routes)
//request query envia por ?nome=Thales
//request param vai para a url
//request body é body

app.listen(3333)