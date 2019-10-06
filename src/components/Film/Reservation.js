import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSeats } from '../../actions';

class Reservation extends React.Component {
    render() {
        if (this.props.film)
            return (
                <div className="col-sm-4 text-center">
                    <img src={this.props.film.Poster} className="img-thumbnail" alt={this.props.film.Title} />
                    {this.renderReservationBox()}
                </div>
            );
        else return <div />;
    }

    renderReservationBox = () => {
        let film = this.props.films ? this.props.films.find(x => x.imdbID === this.props.film.imdbID) : null;
        if (!film) return <div>Brak seansów</div>;
        let seances = film.day.seances.slice(0, 7).map(x => {
            return (
                <li key={x._id}>
                    <Link
                        to="/reservation"
                        key={x._id}
                        id={x._id}
                        value={x._id}
                        onClick={this.clickButton}
                        className="btn btn-primary btn-sm mb-1 mr-1"
                    >
                        {x.hour}
                    </Link>
                </li>
            );
        });
        return (
            <div>
                <h3>
                    Date:{' '}
                    {film.day.date.getDate() +
                        '-' +
                        (film.day.date.getMonth() + 1) +
                        '-' +
                        (film.day.date.getYear() + 1900)}
                </h3>
                <ul className="list-unstyled d-inline-flex p-2">{seances}</ul>
            </div>
        );
    };
    clickButton = e => {
        let film = this.props.films.find(x => x.imdbID === this.props.film.imdbID);
        this.props.fetchSeats(e.target.id, film);
    };
}

const mapStateToProps = state => {
    return { film: state.film, cinema: state.cinema, films: state.films };
};
export default connect(
    mapStateToProps,
    { fetchSeats }
)(Reservation);
