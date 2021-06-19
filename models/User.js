const { Schema, model } = require('mongoose');

const User = new Schema({
    name:{type:String, required:true},
    surname:{type:String, required:true},
    description:{type:String, default:''},
    avatar:{type:String, default:''}
})

module.exports = model('User', User)
