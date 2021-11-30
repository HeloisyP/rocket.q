// Importar dependências. 
const express = require('express');
const path = require('path');
// const {
//     createPass, 
//     createRoom
// } = require('./pages')
const pages = require('./pages')

//console.log(pages)

// Iniciando o express.
const server = express()

server

// Utilizar body do req.
.use(express.urlencoded({extended: true}))

// Utilizando os arquivos estáticos
.set('views', path.join(__dirname, 'views'))
.use(express.static('public'))

// Configurar template engine
.set('view engine', 'hbs')
// server.engine('handlebars', exhbs());
// server.set('view engine','handlebars');

// server.set('views', path.join(__dirname, 'views'))
// server.use(express.static('public'))
// Register `hbs.engine` with the Express app.

.get('/', pages.renderIndex)
.get('/create-pass', pages.createPass)
// .get('/room/:room', roomMain)
.post('/create-room', pages.createRoom)
.get('/room/:room', pages.renderRoom)
.get('/teste', pages.Teste)
// Modal anda main
.post('/question/create/:room', pages.createQuestion)
.post('/question/:room/:question/:action', pages.questionController)

// Start servidor
.listen(3000, () => console.log("Rodadno",__dirname))