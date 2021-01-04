const express = require('express')
const jsonBodyParser = express.json()
const Authentication = require('./controller/authentication')

const Router = express.Router()

Router
    .post('/signup', Authentication.signUp )

module.exports = Router