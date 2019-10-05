const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: Number
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    }]
})

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;