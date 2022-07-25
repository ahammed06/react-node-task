const mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: 'This field is required'
    },
    Brand: {
        type: String,
        required: 'This field is required'
    },
    RamRom: {
        type: String,
        required: 'This field is required'
    },
    Tags: {
        type: String,
        default: ''
    },
    Price: {
        type: String,
        required: 'This field is required'
    },
    Image: {
        type: String,
        required: 'This field is required'
    },
    BestValue: {
        type: Boolean,
        required: 'This field is required'
    },
    BestCamera: {
        type: Boolean,
        required: 'This field is required'
    },
    BestPerformance: {
        type: Boolean,
        required: 'This field is required'
    },
    DateInserted: {
        type: Date,
        required: 'This field is required'
    }
})

module.exports = mongoose.model('Product', productSchema);