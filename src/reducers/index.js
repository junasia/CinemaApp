import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import filmReducer from './filmReducer';
import cinemasReducer from './cinemasReducer';
import cinemaReducer from './cinemaReducer';
import seatsReducer from './seatsReducer';

export default combineReducers({
    films: filmsReducer,
    film: filmReducer,
    cinemas: cinemasReducer,
    cinema: cinemaReducer,
    reservedSeats: seatsReducer
});
