import omdb from '../apis/omdb';

export const fetchFilms = title => async dispatch => {
    if (!title) return null;
    const response = await omdb.get('', { params: { s: title } });
    dispatch({ type: 'FETCH_FILMS', payload: response.data.Search });
};

export const fetchFilm = id => async dispatch => {
    if (!id) return null;
    const response = await omdb.get('', { params: { i: id } });
    dispatch({ type: 'FETCH_FILM', payload: response.data });
};
