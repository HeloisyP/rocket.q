// Importar dependências. 
const express = require('express');
const routes = require('./routes');
const path = require('path');

//console.log(pages)

// Iniciando o express. 
const server = express()

// Utilizar body do req.
.use(express.urlencoded({extended: true}))

// Utilizando os arquivos estáticos
server.use(express.static('public'))

// Configurar template engine. 
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'hbs')

server.use(routes)

server.listen(3000, () => console.log("RODANDO"))