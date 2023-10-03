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

var itemSchema = new mongoose.Schema({ 
    name : {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
        default: 5
    },
    reviews:  [{ 
        review: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    }]
});


const Item = mongoose.model('Item', itemSchema);

module.exports = {Review, Item};
