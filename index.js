const express = require('express');
const app = express();
const cors = require('cors');
const cacheControl = require("express-cache-controller");
const mongoose = require('mongoose');
const config = require('config');
const bodyParser = require('body-parser');
const api = require('./api');
const schedule = require('node-schedule');
const Cinema = require('./models/cinema');
const Movie = require('./models/movie');
const Seance = require('./models/seance');
const Reservation = require('./models/reservation');

require('./startup/routes')(app);
require('./startup/db')();

app.use(cors());
app.use(cacheControl());
app.use(bodyParser.json());
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.get('db'))
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error(err));

var cinemasID = [10589, 8672, 10532, 4258, 9664];
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 0;
rule.hour = 20;
rule.minute = 0;
var j = schedule.scheduleJob(rule, async function()
{
    deleteAll();
    b(1);
    b(2);
    b(3);
    b(4);
    b(5);
    b(6);
    b(7);
});

async function deleteAll()
{
    let seances = await Seance.deleteMany();
    let movies = await Movie.deleteMany();
    let reservations = await Reservation.deleteMany();
}

async function b(y)
{
    var date = new Date();
    date.setDate(date.getDate() + y);
    var day = `${date.getDate()}:${date.getMonth()}`;
    let cinemas = await Cinema.find();
    cinemas.forEach(async x =>
    {   
            var seances = await api.ProgramAPI.fetchProgram(x.id, y);
            seances.forEach(async g =>
            {
                var mv = await api.FilmAPI.fetchFilm(g.title);
                if(!mv.Title || mv.Poster == "N/A") return;
                var movie = await Movie.findById(mv.imdbID||g.title);
                
                if(movie == null)
                {
                    movie = new Movie({_id: mv.imdbID||g.title, name: mv.Title||g.title, description: mv.Plot||"N/A", poster: mv.Poster||"N/A", genre: mv.Genre||"N/A", runtime: mv.Runtime||"N/A"});
                    try
                    {
                        await movie.save();
                    }
                    catch
                    {

                    }
                }
                g.times.forEach(async h =>
                {
                    var seance = new Seance({cinema: x._id, movie: movie._id, hour: h, day: date, seats: 
                        [
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true],
                            [true, true, true, true, true, true, true, true, true, true]
                        ]});
                        
                    await seance.save();
                });
            });   
    }
    );
}
deleteAll();
    b(1);
    b(2);
    b(3);
    b(4);
    b(5);
    b(6);
    b(7);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;