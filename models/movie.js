const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({

    movie_name: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    rating: {
        type: Number,
        maxLength: 2,
        required: true,
    },
    cast: {
        type: Array,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    release_date: {
        type: Date,
        required: true,
    }
})

module.exports = mongoose.model('movie', MovieSchema);
