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

const cinemasID = [10589, 8672, 10532, 4258, 9664];
const rule = new schedule.RecurrenceRule();
rule.dayOfWeek = 0;
rule.hour = 20;
rule.minute = 0;
const j = schedule.scheduleJob(rule, async function () {
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
    let seances = await Seance.deleteMany();
    let movies = await Movie.deleteMany();
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
        if (mv == null) continue;
        if (mv.Search == null) continue;
        mv = mv.Search.filter(x => !!x.Poster).reduce((a, b) => (parseInt(a.Year) < parseInt(b.Year)) ? b : a)
        if (!mv.Title || !mv.Poster) continue;
        let movie = await Movie.findOne({
            imdbID: mv.imdbID
        });

        if (movie == null || !movie.poster) {
            mv = await api.FilmAPI.fetchFilm(mv.imdbID);
            if (mv == null) continue;
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
                console.log("error!!!!!!!")
                continue;
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
            //console.log(seance);
            //console.log(seance);
            if (seance.movie === undefined) continue;
            const movie = seance.movie;
            //console.log(movie);
            for (const h of seance.times) {
                if (movie.days === undefined) movie.days = [];
                let day = movie.days.find(x => {
                    return ((x.cinema.toString() == cinema._id) && (x.date.valueOf() == date.valueOf()));
                });
                //console.log(day, movie.name);
                if (day != undefined) {
                    console.log(day.seances.filter(x => x.hour == h), h, (!!day.seances.filter(x => x.hour == h).length), '\n\n');
                    if (!!day.seances.filter(x => x.hour == h).length) continue;
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

async function start() {
    //deleteAll();
    await b(1);
    await b(2);
    await b(3);
    await b(4);
    await b(5);
    await b(6);
    await b(7);
    console.log("All is loaded!");
}
//start();


const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`Listening on port ${port}...`));

module.exports = server;