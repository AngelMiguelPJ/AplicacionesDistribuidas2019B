const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: {type: String, required: [true]},
    priceUni: {type: Number, required: [true]},
    description: {
        type: String, required: [true]
    },
    enable: {
        type: Boolean, required: [true], default: true
    },
    category: {
        type: String, required: [true]
    } 
});

module.exports = mongoose.model('Product', productSchema);