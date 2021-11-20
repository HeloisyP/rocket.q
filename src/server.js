// Importar dependências. 
const express = require('express');
const routes = require('./routes');
const path = require('path');

//console.log(pages)

// Iniciando o express. 
const server = express()

// Utilizar body do req.
server.use(express.urlencoded({extended: true}))

// Utilizando os arquivos estáticos
server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))

// Configurar template engine
server.set('view engine', 'hbs')
// server.engine('handlebars', exhbs());
// server.set('view engine','handlebars');

// server.set('views', path.join(__dirname, 'views'))
// server.use(express.static('public'))
// Register `hbs.engine` with the Express app.

server.use(routes)

server.listen(3000, () => console.log("Rodadno",__dirname))