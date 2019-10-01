import React from 'react';
import { Link } from 'react-router-dom';

const Film = ({ film }) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-sm-2">
                    <Link to={'/film/' + film.imdbID}>
                        <img className="img-thumbnail img-fluid" alt={film.Title} src={film.Poster} />
                    </Link>
                </div>
                <div className="col-sm-10">
                    <h5 className="mb-1">{film.Title}</h5>
                    <p>
                        <small className="text-muted">
                            {film.Genre} | {film.Runtime}
                        </small>
                    </p>
                    <div>
                        {/* {film.hours.map(x => {
                            return (
                                <Link to="/reservation" key={x.id} className="btn btn-primary btn-sm mb-1">
                                    x.hour
                                </Link>
                            );
                        })} */}
                        <Link to="/reservation" className="btn btn-primary btn-sm mb-1">
                            15:33
                        </Link>
                    </div>
                </div>
            </div>
        </li>
        // <Link to={'/film/' + film.imdbID} className="film">
        //     <img alt={film.Title} src={film.Poster} />
        //     <p>
        //         {film.Title}
        //         <br />({film.Year})
        //     </p>
        // </Link>
    );
};

export default Film;
