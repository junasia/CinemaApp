const express = require('express');
const router = express.Router();
const Reservation = require('../models/reservation');
const Seance = require('../models/seance');
const cors = require('cors');


router.get('/:id', cors(), async (req, res) => {
  let seance = await Seance.findById(req.params.id);
  if (!seance) return res.status(404).send('Seance not found');
  res.send(seance.seats);
});

router.post('/:id', cors(), async (req, res) => {

  req.body.seats.forEach(async x => {
    var reservation = new Reservation({
      name: req.body.name,
      seance: req.body.seance,
      mail: req.body.mail,
      phone: req.body.phone,
      rowNumber: x.rowNumber,
      seatNumber: x.seatNumber
    });
    await reservation.save();
  });

  var seance = await Seance.findById(req.params.id);
  req.body.seats.forEach(x => {
    seance.seats[x.rowNumber][x.seatNumber] = false;
  });
  seance.markModified('seats');
  await seance.save();

  //console.log(seance);
  res.send("Reservation complete");
});

module.exports = router;