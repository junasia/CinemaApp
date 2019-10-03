const mongoose = require('mongoose');

const cinemaSchema = new mongoose.Schema(
    {
        name: 
        {
            type: String,
            required: true
        },
        id:
        {
            type: Number
        }
    }
)

const Cinema = mongoose.model('Cinema', cinemaSchema);
module.exports = Cinema;