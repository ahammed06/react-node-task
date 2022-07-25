const mongoose = require('mongoose')

var conditionSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: 'This field is required'
    },
    Condition: {
        type: String,
        required: 'This field is required'
    },
    Price: {
        type: Number,
        required: 'This field is required'
    }
})

module.exports = mongoose.model('Condition', conditionSchema);