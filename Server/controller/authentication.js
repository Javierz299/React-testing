const User = require("../models/user")


exports.signUp = (req,res,next) => {
    console.log('req',req.body)
    const { email, password } = req.body;

    if(!email || password){
        return res.status(422)
            .send({error: 'Must provide an email or password'})
    }

    //          email: email
    User.findOne({ email }, (err,existingUser) => {
        if(err) return next(err) ;
        //                           unprocessable
        if(existingUser) return res.status(422)
            .send(({ error: 'Email is in use' }));

        const user = new User({
            email,
            password
        });

    user.save((err) => {// user.save() takes x amount of time to save
        if(err) return next(err);

        res.json({ success: true })
        });

    });

    //res.send({ success: 'true' })
}

//module.exports = signUp