const mongoose = require('mongoose')
const { Schema } = mongoose

const employeesSchema = new Schema({
    name: { type: String, required: true, max: 60 },
    surname_P: { type: String, required: true, max: 40 },
    surname_M: { type: String, required: true, max: 40 },
    phone: { type: String, required: true, max: 15 },
    email: { type: String, required: false, max: 70 },
    address: { type: String, required: false, max: 150 }
})

module.exports = mongoose.model("employees", employeesSchema)