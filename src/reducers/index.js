import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import filmReducer from './filmReducer';
import cinemasReducer from './cinemasReducer';

export default combineReducers({
    films: filmsReducer,
    film: filmReducer,
    cinemas: cinemasReducer
});
