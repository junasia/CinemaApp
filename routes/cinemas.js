const express = require('express');
const router = express.Router();
const Cinema = require('../models/cinema');
const Seance = require('../models/seance');
const Movie = require('../models/movie');
const cors = require('cors');

router.get('/', cors(), async (req, res) => {
    let cinemas = await Cinema.find();
    res.send(cinemas.map(x => {
        return {
            name: x.name,
            id: x.id
        }
    }));
});

router.get('/:id', cors(), async (req, res) => {
    let cinema = await Cinema.findOne({
        id: req.params.id
    });
    let movies = await Movie.find();
    //console.log(movies);
    movies = movies.filter(x => x != undefined && x.days != undefined)
        .filter(y => {
            return y.days.find(z => {

                return z.cinema._id == cinema._id.toString();
            }) != undefined
        });
    console.log(movies);
    movies = movies.map(x => {
        x.days = x.days.filter(y => y.cinema == cinema._id.toString());
        return x;
    });
    console.log(movies);

    if (!cinema) return res.status(404).send('Cinema not found');
    cinema.movies = movies;
    res.send(cinema);
});

module.exports = router;