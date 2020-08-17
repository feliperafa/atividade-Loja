const express = require('express')
const bodyParser = require('body-Parser')
const mongosse = require('mongoose')
const Produto = require('./src/models/produtoModels')

const app = express()

//Conexão com o banco de dados
mongosse.Promise - global.Promise
mongosse.connect('mongodb://localhost/lojaDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./src/routes/produtoRoutes')

routes(app)

app.route('/').get((req, res) => {
    res.send('Acessou API da LojaDB')
})

const port = process.env.PORT || 3001

app.listen(port)

console.log('Aplicação Iniciada na Porta', port)