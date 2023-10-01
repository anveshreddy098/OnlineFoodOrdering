const mongoose = require('mongoose');
const {locationSchema} = require('./location')
const Schema = mongoose.Schema;


const userSchema = Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    cart: [{
        location: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Location'
        }
    }]
});

const user = mongoose.model('user', userSchema);


module.exports = {user};