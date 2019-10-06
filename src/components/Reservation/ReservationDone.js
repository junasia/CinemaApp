import React from 'react';
import { connect } from 'react-redux';
import { postReservation } from '../../actions';

class ReservationDone extends React.Component {
    render() {
        console.log(this.props.reservation);
        return (
            <div>
                <div className="d-flex flex-column align-items-center">
                    <div className="jumbotron pt-3 mt-3 width-80">
                        <h1 className="display-4">Success!</h1>
                        <p className="lead">
                            The confirmation resrevation has been succesfully sent to provided email adress. Show it at
                            the Box Office and buy your tickets no later than 30 minutes before the screening. See you
                            soon!
                        </p>
                        <hr className="my-4" />
                        <h5>Reservation details:</h5>
                        <div className="row">
                            <div className="col-sm">
                                <p className="font-weight-bold m-0">Title: </p>
                                <p>{this.props.reservation.film.name}</p>
                            </div>
                            <div className="col-sm">
                                <p className="font-weight-bold m-0">Date:</p>
                                <p>
                                    {this.props.reservation.film.day.date.getDate() +
                                        '-' +
                                        (this.props.reservation.film.day.date.getMonth() + 1) +
                                        '-' +
                                        (this.props.reservation.film.day.date.getYear() + 1900)}
                                </p>
                            </div>
                            <div className="col-sm">
                                <p className="font-weight-bold m-0">Time:</p>
                                <p>
                                    {
                                        this.props.reservation.film.day.seances.find(
                                            x => x._id == this.props.reservation.seance
                                        ).hour
                                    }
                                </p>
                            </div>
                            <div className="col-sm">
                                <p className="font-weight-bold m-0">Seats:</p>
                                {this.renderSeatNames()}
                            </div>
                        </div>
                        <div className="d-flex justify-content-around">
                            <a href="#/">
                                <button type="button" className="btn btn-success mt-5">
                                    Home
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    renderSeatNames = () => {
        let seats = this.props.reservation.postedReservation.reservation.seats;
        return seats.map(x => {
            return (
                <p key={x.rowNumber + '/' + x.seatNumber}>
                    {String.fromCharCode('A'.charCodeAt() + parseInt(x.rowNumber)) + (parseInt(x.seatNumber) + 1)}
                </p>
            );
        });
    };
}

const mapStateToProps = state => {
    return { reservation: state.reservation, date: state.date };
};

export default connect(
    mapStateToProps,
    { postReservation }
)(ReservationDone);
