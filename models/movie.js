const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    description: {
        type: String
    },
    poster: {
        type: String
    },
    genre: {
        type: String
    },
    runtime: {
        type: String
    },
    imdbID: {
        type: String,
        unique: true
    },
    days: [{
        cinema: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cinema'
        },
        date: Date,
        seances: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Seance'
        }]
    }]
})

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;