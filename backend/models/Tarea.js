const mongoose = require('mongoose')
const Schema = mongoose.Schema

//create Schema
const TareaSchema = new Schema({
    name:  {
        type: String,
        required: true
    },
    date:  {
        type: Date,
        default: Date.now
    }
})

module.exports = Tarea = mongoose.model('tarea', TareaSchema)
