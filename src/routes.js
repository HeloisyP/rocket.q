const express = require('express')
const questionController = require('./controllers/questionController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index", {page: 'enter-room'}))
routes.get('/room', (req, res) => res.render("room"))
routes.get('/create-pass', (req, res) => res.render("create-pass", {page: 'create-pass'}))

routes.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", {req}))

// Formato do dados capturados na modal
routes.post('/room/:room/:question/:action', questionController.index)

module.exports = routes