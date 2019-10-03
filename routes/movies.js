const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');
const cors = require('cors');

router.get('/:id', cors(), async (req, res) => 
{
    let movies = await Movie.find({_id: req.params.id});
    res.send(movies);
});

router.get('/', cors(), async (req, res) => 
{
    let movies = await Movie.find();
    res.send(movies);
});

module.exports = router;