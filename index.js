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
    .catch(err => console.error('err'));

var cinemasID = [10589, 8672, 10532, 4258, 9664];
var rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 0;
rule.hour = 20;
rule.minute = 0;
var j = schedule.scheduleJob(rule, async function () {
    await deleteAll();
    await b(1);
    await b(2);
    await b(3);
    await b(4);
    await b(5);
    await b(6);
    await b(7);
});

async function deleteAll() {
    //let seances = await Seance.deleteMany();
    //let movies = await Movie.deleteMany();
    let reservations = await Reservation.deleteMany();
}

async function loadMovies(seances) {
    if (seances == null) return;
    for (const g of seances) {
        let mv;
        try {
            mv = await api.FilmAPI.findFilm(g.title);
        } catch (error) {
            console.log('error');
            continue;
        }
        if (mv == null) return;
        if (mv.Search == null) return;
        mv = mv.Search.reduce((a, b) => (parseInt(a.Year) < parseInt(b.Year)) ? b : a)
        if (!mv.Title || mv.Poster == "N/A") return;
        const movie = await Movie.findOne({
            imdbID: mv.imdbID
        });

        if (movie == null || !movie.poster) {
            mv = await api.FilmAPI.fetchFilm(mv.imdbID);
            movie = new Movie({
                imdbID: mv.imdbID || g.title,
                name: mv.Title || g.title,
                description: mv.Plot || "N/A",
                poster: mv.Poster || "N/A",
                genre: mv.Genre || "N/A",
                runtime: mv.Runtime || "N/A",
                days: []
            });
            try {
                movie = await movie.save();
                //return console.log('movie:   ', movie, '//////');
            } catch (error) {
                return console.log("error!!!!!!!")
            }
        }
        g.movie = movie;
    }
}

async function createNewSeance(h) {
    const seance = new Seance({
        hour: h,
        seats: [
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
        ]
    });
    return await seance.save();
}

async function b(y) {
    let date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + y);
    let cinemas = await Cinema.find();
    let cinemaSeances = {};
    for (const cinema of cinemas) {
        const seances = await api.ProgramAPI.fetchProgram(cinema.id, y);
        await loadMovies(seances);
        cinemaSeances[cinema] = seances;
    }
    for (const cinema of cinemas) {
        for (const seance of cinemaSeances[cinema]) {
            console.log(seance);
            if (seance.movieId === undefined) continue;
            const movie = g.movie;
            console.log(movie);
            for (const h of seance.times) {
                if (movie.days === undefined) movie.days = [];
                let day = movie.days.find(x => {
                    return ((x.cinema.toString() == cinema._id) && (x.date.valueOf() == date.valueOf()));
                });
                //console.log(day, movie.name);
                if (day != undefined) {
                    if (day.seances.find(async x => {
                            //console.log('seance: ', x);
                            if (x.hour == h) return true;
                        }) == null) continue;
                }
                let seance = await createNewSeance(h);
                if (day == undefined)
                    movie.days.push({
                        cinema: cinema._id,
                        date: date,
                        seances: [{
                            hour: seance.hour,
                            _id: seance._id
                        }]
                    })
                else
                    day.seances.push({
                        hour: seance.hour,
                        _id: seance._id
                    })

                await movie.save();
                //return console.log('seance:', movie, seance);
            }

        }
    }
};
//deleteAll();
b(1);
// b(2);
// b(3);
// b(4);
// b(5);
// b(6);
// b(7);

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;