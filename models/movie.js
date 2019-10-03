const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
    {
        name: 
        {
            type: String,
        },
        description:
        {
            type: String
        },
        poster:
        {
            type: String
        },
        genre:
        {
            type: String
        },
        runtime:
        {
            type: String
        },
        _id: String
    }
)

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;