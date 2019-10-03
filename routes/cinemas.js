const express = require('express');
const router = express.Router();
const Cinema = require('../models/cinema');
const Seance = require('../models/seance');
const Movie = require('../models/movie');
const cors = require('cors');

router.get('/', cors(), async (req, res) => 
{
    let cinemas = await Cinema.find();
    res.send(cinemas.map(x => {return {name: x.name, id: x._id}}));
});

router.get('/:id', cors(), async (req, res) => 
{
    let cinemas = await Seance.find({cinema: req.params.id});
    if (!cinemas) return res.status(404).send('Cinema not found');
    res.send(cinemas.map(x => {return {id: x._id, hour: x.hour, movie: x.movie, day: x.day}}));
});

module.exports = router;