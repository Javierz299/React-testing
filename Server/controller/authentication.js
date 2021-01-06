const User = require("../models/user")
const jwt = require('jwt-simple')
const config = require('../../config')

const tokenForUser = (user) => {
    console.log('tokenforuser', user)
    const timestamp = new Date().getTime()
    // sub => subject: user.id - iat => issued at time
    return jwt.encode({sub: user.id, iat: timestamp }, config.secret)
}

exports.signin = (req, res, next) => {
    //user has already had their email and password auth'd
    //we just need to give them a token
    console.log("usertoken",req.user)
    res.send({ token: tokenForUser( req.user )});

};


exports.signUp = (req,res,next) => {
    console.log('REQ FROM CLIENT',req.body)
    const { email, password } = req.body;

    if(!email || !password){
        return res.status(422)
            .send({error: 'Must provide an email or password'})
    }

    //          email: email
    User.findOne({ email }, (err,existingUser) => {
    console.log('FIND METHOD',existingUser)
        if(err) return next(err) ;
        //                           unprocessable
        if(existingUser) {
            console.log("STATUS 422")
            return res.status(422).send({ error: 'Email is in use' });
        }
        const user = new User({
            email,
            password
        });
        
        console.log("BEFORE SAVE",user)
    user.save((err) => {// user.save() takes x amount of time to save
        if(err) return next(err);
        console.log("SAVE",user)
        res.json({ token: tokenForUser(user) })
        });

    });

    //res.send({ success: 'true' })
}

//module.exports = signUp