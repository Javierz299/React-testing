const express = require('express')
//const jsonBodyParser = express.json()
const passportService = require('./services/passport')
const passport = require('passport')
const Authentication = require('./controller/authentication')

//                                 by default passport wants to create a cookie based session. so set to false
const requireAuth = passport.authenticate('jwt', {session: false})
const requiresSignin = passport.authenticate('local', { session: false })

const Router = express.Router()

Router
    .get('/', requireAuth, (req, res) => {
        res.send({ hi: 'there' })
    });

Router
    .post('/signin', requiresSignin, Authentication.signin );

Router
    .post('/signup', Authentication.signUp );


module.exports = Router;