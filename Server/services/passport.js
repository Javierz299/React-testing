const passport = require('passport')
const User = require('../models/user')
const config = require('../../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local')

//strategies are plugins that work with passport
//strategy attemps to authenticate user in a particular way


//Local Strategy.. data stored locally
const localOptions = { usernameField: 'email'}
const localLogin = new LocalStrategy(localOptions , (email, password, done) => {
    // verify this email and password
    // if it is the correct email and password
    //otherwise, call done with false

    User.findOne( { email: email }, (err,user) => {
        if(err) return done(err);

        if(!user) return done(null,false);// no err but still couldnt find user

        user.comparePassword(password, (err,isMatch) => {
            if(err) return done(err);
            if(!isMatch) return done(null,false);

            return done(null,user);// done callback is supplied by passport and takes the user model and assigns it to the request.user
        });
    });

});


// setup option for JWT strategy
const jwtOptions = {  // used to tell the strategy where to look because the token/key can be located anywhere
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.secret
};

// create JWT strategy        //
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
    // see if userId in the payload exists in our database
    // if it does, call 'done' with that other
    // otherwise, call done without a user object

    //payload should contain user data
    User.findById(payload.sub, (err, user) => {
        if(err) return done(err, false)// return err if error occurs looking for user and return false if no user

        if(user) return done(null, user)// return user
        else done(null, false)// no error in the process of finding user but returns false if cant find user
    });

});

//tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);