import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import filmReducer from './filmReducer';
import cinemasReducer from './cinemasReducer';
import cinemaReducer from './cinemaReducer';
import dateReducer from './dateReducer';
import reservationReducer from './reservationReducer';

export default combineReducers({
    films: filmsReducer,
    film: filmReducer,
    cinemas: cinemasReducer,
    cinema: cinemaReducer,
    date: dateReducer,
    reservation: reservationReducer
});
