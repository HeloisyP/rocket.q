// Importar dependências. 
const express = require('express');
const routes = require('./routes');
const path = require('path');
const exhbs = require("express-handlebars");

//console.log(pages)

// Iniciando o express. 
const server = express()

// Utilizar body do req.
server.use(express.urlencoded({extended: true}))

// Utilizando os arquivos estáticos


 
// Configurar template engine
server.engine('handlebars', exhbs());
server.set('view engine','handlebars');

server.set('views', path.join(__dirname, 'views'))
server.use(express.static('public'))
// Register `hbs.engine` with the Express app.

server.use(routes)

server.listen(3000, () => console.log("Rodadno",__dirname))