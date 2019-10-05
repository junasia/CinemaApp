import React from 'react';
import { Link } from 'react-router-dom';

const Film = ({ film }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-sm-2">
                    <Link to={'/film/' + film.imdbID}>
                        <img className="img-thumbnail img-fluid" alt={film.name} src={film.poster} />
                    </Link>
                </div>
                <div className="col-sm-10">
                    <h5 className="mb-1">{film.name}</h5>
                    <p>
                        <small className="text-muted">
                            {film.genre} | {film.runtime}
                        </small>
                    </p>
                    <div>{renderHours(film)}</div>
                </div>
            </div>
        </li>
    );
};

function renderHours(film) {
    if (film.day)
        return film.day.seances.map(x => {
            return (
                <Link to="/reservation" key={x._id} className="btn btn-primary btn-sm mb-1 mr-1">
                    {x.hour}
                </Link>
            );
        });
    else
        return film.days[0].seances.map(x => {
            return (
                <Link to="/reservation" key={x._id} className="btn btn-primary btn-sm mb-1 mr-1">
                    {x.hour}
                </Link>
            );
        });
}

export default Film;
