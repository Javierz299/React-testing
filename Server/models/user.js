const mongoose = require('mongoose')
const Schema = mongoose.Schema;// define model

// doesnt check case sensitivity
const userSchema = new Schema ({
    email: {type: String, unique: true, lowercase: true},
    password: String,

})
// ModelClass
const model = mongoose.model('user', userSchema);

module.exports = model;