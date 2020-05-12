const mongoose = require('mongoose')
const { Schema } = mongoose

const usersSchema = new Schema({
    user: { type: String, required: true, max: 100 },
    pass: { type: String, required: true, max: 128 }
})

module.exports = mongoose.model("users", usersSchema)