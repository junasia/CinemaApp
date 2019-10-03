import React from 'react';
import { Link } from 'react-router-dom';

const Film = ({ film }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-sm-2">
                    <Link to={'/film/' + film.movie._id}>
                        <img className="img-thumbnail img-fluid" alt={film.movie.name} src={film.movie.poster} />
                    </Link>
                </div>
                <div className="col-sm-10">
                    <h5 className="mb-1">{film.movie.title}</h5>
                    <p>
                        <small className="text-muted">
                            {film.movie.genre} | {film.movie.runtime}
                        </small>
                    </p>
                    <div>
                        {film.hours.map(x => {
                            return (
                                <Link to="/reservation" key={x.id} className="btn btn-primary btn-sm mb-1 mr-1">
                                    {x.hour}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Film;
