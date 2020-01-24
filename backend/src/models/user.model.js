const mongoose = require('mongoose')

const { Schema } = mongoose

const UserSchema = new Schema({
    name: { type: String, required: true },
    bags: { type: Number, required: true }
})


module.exports = mongoose.model('User', UserSchema)