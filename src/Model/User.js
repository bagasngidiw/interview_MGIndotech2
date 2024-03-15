const mongoose = require('mongoose')


const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hobby:{
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    }
}, {timestamps: true})


const User = mongoose.model('User', userSchema)

module.exports = {
    User,
    userSchema
}