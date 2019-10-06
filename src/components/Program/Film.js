import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSeats } from '../../actions';

class Film extends React.Component {
    render() {
        if (this.props.film.day && this.props.film.poster)
            return (
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-sm-2">
                            <Link to={'/film/' + this.props.film.imdbID}>
                                <img
                                    className="img-thumbnail img-fluid"
                                    alt={this.props.film.name}
                                    src={this.props.film.poster}
                                />
                            </Link>
                        </div>
                        <div className="col-sm-10">
                            <h5 className="mb-1">{this.props.film.name}</h5>
                            <p>
                                <small className="text-muted">
                                    {this.props.film.genre} | {this.props.film.runtime}
                                </small>
                            </p>
                            <div>{this.renderHours(this.props.film)}</div>
                        </div>
                    </div>
                </li>
            );
        else return <div></div>;
    }

    renderHours = () => {
        if (this.props.film.day)
            return this.props.film.day.seances.map(x => {
                return (
                    <Link
                        to="/reservation"
                        key={x._id}
                        id={x._id}
                        onClick={this.clickButton}
                        className="btn btn-primary btn-sm mb-1 mr-1"
                    >
                        {x.hour}
                    </Link>
                );
            });
        else return <div>Brak seansów</div>;
    };

    clickButton = e => {
        this.props.fetchSeats(e.target.id, this.props.film);
    };
}

export default connect(
    null,
    { fetchSeats }
)(Film);
