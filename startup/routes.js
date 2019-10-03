const cinemas = require('../routes/cinemas');
const seance = require('../routes/seance');
const movies = require('../routes/movies');
const express = require('express');

module.exports = function(app) 
{
    app.use(express.json());
    app.use('/api/cinemas', cinemas);
    app.use('/api/seances', seance);
    app.use('/api/movies', movies);
 
}