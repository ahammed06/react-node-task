const mongoose = require('mongoose')

var sourceSchema = new mongoose.Schema({
    ID: {
        type: Number,
        required: 'This field is required'
    },
    Source: {
        type: String,
        required: 'This field is required'
    },
    Percentage: {
        type: Number,
        required: 'This field is required'
    }
})

module.exports = mongoose.model('Source', sourceSchema);