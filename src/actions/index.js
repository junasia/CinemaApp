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

    const films = response.data.movies;

    dispatch({ type: 'FETCH_FILMS', payload: films });
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

// export const fetchCinemas = () => async dispatch => _fetchCinemas(dispatch);
// const _fetchCinemas = _.memoize(async (dispatch) => {
//     const response = await heroku.get('cinemas/');
//     dispatch({type: 'FETCH_CINEMAS',payload: response.data});
// })

export const saveCinema = id => dispatch => {
     if(!id) return null;
    dispatch({ type: 'SAVE_CINEMA', payload: id });
};

export const reserveSeat = id => dispatch => {
    if(!id) return null;
    dispatch({type: 'RESERVE_SEAT', payload: id});
}

export const cancelReserve = id => dispatch => {
    if(!id) return null;
    dispatch({type: 'CANCEL_RESERVE', payload: id});
}