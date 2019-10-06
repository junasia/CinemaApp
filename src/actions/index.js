import _ from 'lodash';
import omdb from '../apis/omdb';
import heroku from '../apis/heroku';

export const fetchFilms = (id, clearCache) => async dispatch => {
    if (clearCache === true) _fetchFilms.cache = new _.memoize.Cache();

    return _fetchFilms(id, dispatch);
};

const _fetchFilms = _.memoize(async (id, dispatch) => {
    let response;
    try {
        response = await heroku.get('cinemas/' + id);
    } catch (error) {
        console.log('fetchFilms action error: ', error);
    }

    let films = response.data.movies.map(x => {
        x.days = x.days.map(y => {
            y.date = y.date.split('T')[0];
            y.date = new Date(y.date);
            y.date.setHours(0, 0, 0, 0);
            return y;
        });
        x.day = x.days.find(x => {
            let d = new Date(Date.now());
            d.setHours(0, 0, 0, 0);
            return new Date(x.date).getTime() === d.getTime();
        });
        return x;
    });

    dispatch({ type: 'FETCH_FILMS', payload: films });
    //dispatch({ type: 'SAVE_DATE', payload: new Date(Date.now) });
});

export const fetchFilm = id => async dispatch => _fetchFilm(id, dispatch);
const _fetchFilm = _.memoize(async (id, dispatch) => {
    if (!id) return null;

    let response;
    try {
        response = await omdb.get('', { params: { i: id } });
    } catch (error) {
        console.log('fetchFilm action error: ', error);
    }

    dispatch({ type: 'FETCH_FILM', payload: response.data });
});

export const fetchCinemas = () => async dispatch => {
    const response = await heroku.get('cinemas/');
    dispatch({ type: 'FETCH_CINEMAS', payload: response.data });
};

export const saveCinema = id => dispatch => {
    if (!id) return null;
    dispatch({ type: 'SAVE_CINEMA', payload: id });
};

export const saveDate = date => dispatch => {
    if (!date) return null;
    let d = new Date(date);
    d.setHours(0, 0, 0, 0);
    dispatch({ type: 'SAVE_DATE', payload: d });
};

export const reserveSeat = id => dispatch => {
    if (!id) return null;
    dispatch({ type: 'RESERVE_SEAT', payload: id });
};

export const cancelReserve = id => dispatch => {
    if (!id) return null;
    dispatch({ type: 'CANCEL_RESERVE', payload: id });
};

export const fetchSeats = (id, film) => async dispatch => {
    if (!id || !film) return null;
    const response = await heroku.get('seances/' + id);
    if (!response || !response.data) return null;
    dispatch({ type: 'FETCH_SEATS', payload: { id, film, seats: response.data } });
};

export const postReservation = reservation => async dispatch => {
    if (!reservation) return null;
    const response = await heroku.post('seances/' + reservation.seance, reservation);
    if (!response || !response.data) return null;
    console.log(response);
    //dispatch({ type: 'FETCH_SEATS', payload: { id, film, seats: response.data } });
};
