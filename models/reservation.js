const Joi = require('joi');
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema(
    {
        seance:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Seance'
        },
        mail:
        {
            type: String,
            required: true
        },
        name:
        {
            type: String,
            required: true
        },
        phone:
        {
            type: Number,
            required: true
        },
        seats: Array
    }
)

function validateReservation(reservation) 
{
    const schema = 
    {
      name: Joi.string().required(),
      phone: Joi.number().required(),
      mail: Joi.string().required(),
    };
  
    return Joi.validate(reservation, schema);
}

const Reservation = mongoose.model('Reservation', reservationSchema);
module.exports = Reservation;