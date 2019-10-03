import _ from 'lodash';
import omdb from '../apis/omdb';
import heroku from '../apis/heroku';

export const fetchFilms = id => async dispatch => _fetchFilms(id, dispatch);
const _fetchFilms = _.memoize(async (id, dispatch) => {
    const response = await heroku.get('cinemas/' + id);

    let array = Array.from(new Set(response.data.map(x => x.movie)));

    const movies = await Promise.all(
        array.map(async movieId => {
            const hours = response.data.filter(h => h.movie === movieId);
            const movie = await heroku.get('movies/' + movieId);
            return { movie: movie.data[0], hours: hours.map(x => _.pick(x, ['hour', 'id', 'day'])) };
        })
    );

    dispatch({ type: 'FETCH_FILMS', payload: movies });
});

export const fetchFilm = id => async dispatch => _fetchFilm(id, dispatch);
const _fetchFilm = _.memoize(async (id, dispatch) => {
    if (!id) return null;
    const response = await omdb.get('', { params: { i: id } });
    dispatch({ type: 'FETCH_FILM', payload: response.data });
});

export const fetchCinemas = () => async dispatch => {
   const response = await heroku.get('cinemas/');
   dispatch({type: 'FETCH_CINEMAS',payload: response.data});
}