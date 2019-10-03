const mongoose = require('mongoose');

const seanceSchema = new mongoose.Schema(
    {
        movie:
        {
            type: String,
        },
        hour:
        {
            type: String
        },
        day:
        {
            type: Date
        },
        seats:
        {
            type: Array
        },
        cinema:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cinema'
        },
    },
    {
        toObject: {virtuals:true},
        toJSON: {virtuals:true} 
    }
);
seanceSchema.virtual('Movie', 
{
    ref: 'Movie',
    localField: 'movie',
    foreignField: '_id',
    justOne: true
});

const Seance = mongoose.model('Seance', seanceSchema);
module.exports = Seance;