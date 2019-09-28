import React from 'react';
import { Link } from 'react-router-dom';

const Film = ({ film }) => {
    return (
        <Link to={'/film/' + film.imdbID} className="film">
            <img alt={film.Title} src={film.Poster} />
            <p>
                {film.Title}
                <br />({film.Year})
            </p>
        </Link>
    );
};

export default Film;
