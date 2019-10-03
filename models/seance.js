const mongoose = require('mongoose');

const seanceSchema = new mongoose.Schema({
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie'
    },
    hour: String,
    seats: [
        [Boolean]
    ],
});

const Seance = mongoose.model('Seance', seanceSchema);
module.exports = Seance;