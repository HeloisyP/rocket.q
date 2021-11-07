const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/room', (req, res) => res.render("room"))
routes.get('/create-pass', (req, res) => res.render("create-pass"))

routes.get('/room/:room/:question/:action', (req, res) => res.render("exemplo", {req}))

module.exports = routes