const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const Schema = mongoose.Schema;// define model

// doesnt check case sensitivity
const userSchema = new Schema ({
    email: {type: String, unique: true, lowercase: true},
    password: String,

})


// ON SAVE HOOK, ENCRYPT PASSWORD
userSchema.pre('save', function(next){
    const user = this;
    console.log('this',this) //user.email user.password => this.
    bcrypt.genSalt(10, (err,salt) => {
        if(err){
            return next(err);
        }

    bcrypt.hash(user.password, salt, null, (err, hash) =>{
        if(err){
            return next(err);
        }
        user.password = hash;
        next();
        });
    });
});
//                             password user is submitting
userSchema.methods.comparePassword = function(candidatePassword, callback){
    console.log('password',candidatePassword)
//                             this references user model
    bcrypt.compare(candidatePassword, this.password, (err,isMatch) => {
        if(err) return callback(err);

        callback(null,isMatch)
    });
};

// ModelClass
const model = mongoose.model('user', userSchema);

module.exports = model;