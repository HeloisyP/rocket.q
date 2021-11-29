const express = require('express')
const questionController = require('./controllers/questionController')
const roomController = require('./controllers/roomController')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/create-pass', (req, res) => res.render("create-pass"))
routes.get('/room/:room', (req, res) => res.render("room"))

// Formato do dados capturados na modal
routes.post('/question/:room/:question/:action', questionController.index)
routes.post('/create-room', createPass.createPass)

module.exports = routes