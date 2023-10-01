const mongoose = require('mongoose')

var reviewSchema = new mongoose.Schema({              
    author: String,
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5

    },
    reviewText: String,
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const Review = mongoose.model('Review', reviewSchema);

var locationSchema = new mongoose.Schema({ 
    name : {
        type: String,
        required: true
    },
    description: String,
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed:{
        type:Boolean,
        required:true,
        default: false
    },

    reviews:  [{ 
        review: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    }]
});


const Location = mongoose.model('Location', locationSchema);

module.exports = {Review, Location, locationSchema};
