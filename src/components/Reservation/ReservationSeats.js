import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { reserveSeat, cancelReserve } from '../../actions';

class ReservationSeats extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: null };
    }

    clickSeatButton = e => {
        if (e.target.value === 'false') return;
        if (this.props.reservation.reservations.includes(e.target.id)) {
            this.props.cancelReserve(e.target.id);
        } else this.props.reserveSeat(e.target.id);
    };

    renderNumberOfSeat = seat => {
        if (seat.length === 3) {
            return seat[0] + seat[2];
        }
        return seat[0] + seat[2] + seat[3];
    };

    getSeatClassName = (seat, seatId) => {
        let className;
        if (this.props.reservation.reservations.includes(seatId)) className = 'btn btn-danger btn-sm';
        else className = 'btn ' + (seat ? 'btn-success' : 'btn-secondary disabled') + ' btn-sm';
        return className;
    };

    handleClickNext = e => {
        if (this.props.reservation.reservations.length) {
            this.setState({ redirect: '/form' });
        }
    };

    waitForSeanceData = async () => {
        setTimeout(() => {
            if (!this.props.reservation.seats.length) this.setState({ redirect: '#/' });
        }, 1000);
    };

    renderSeats() {
        let seatsArr = this.props.reservation.seats;
        let buttons = [];
        for (const row in seatsArr) {
            for (const seat in seatsArr[row]) {
                const seatId = row + '/' + seat;
                buttons.push(
                    <button
                        onClick={this.clickSeatButton}
                        value={seatsArr[row][seat]}
                        type="button"
                        id={seatId}
                        key={seatId}
                        className={this.getSeatClassName(seatsArr[row][seat], seatId)}
                    >
                        {String.fromCharCode('A'.charCodeAt() + parseInt(row)) + (parseInt(seat) + 1)}
                    </button>
                );
            }
        }
        return <div className="seats-container mt-4">{buttons}</div>;
    }

    render() {
        if (!this.props.reservation.seats.length) {
            this.waitForSeanceData();
        }
        return (
            <div>
                {this.state.redirect ? (
                    this.state.redirect === '#/' ? (
                        <meta httpEquiv="Refresh" content="0; url=#/" />
                    ) : (
                        <Redirect push to={this.state.redirect} />
                    )
                ) : (
                    ''
                )}
                <div className="d-flex flex-column align-items-center position-relative pb-5 pt-4">
                    <div className="jumbotron pt-3 mt-3 width-80">
                        <h1 className="display-4">Choose seat</h1>
                        <p className="lead">Find seat, which is the most suitable for you and click on it.</p>
                        <hr className="my-4" />
                        <h3>Title: </h3>
                        <h5>{this.props.reservation.film ? this.props.reservation.film.name : null}</h5>
                    </div>
                    <ul className="list-group list-group-flush width-80">
                        <li className="list-group-item d-flex justify-content-around">
                            <span className="badge badge-secondary">Not available</span>
                            <span className="badge badge-success">Available</span>
                            <span className="badge badge-danger">Your choice</span>
                        </li>
                        <li className="list-group-item d-flex flex-column align-items-center">
                            <div className="screen text-center">
                                <small>SCREEN</small>
                            </div>
                            {this.renderSeats()}
                            <div className="d-flex justify-content-around w-100 mt-5">
                                <a className="btn btn-warning" href="#/" role="button">
                                    Back
                                </a>
                                <button className="btn btn-primary" onClick={this.handleClickNext}>
                                    Next
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { reservation: state.reservation };
};

export default connect(
    mapStateToProps,
    { reserveSeat, cancelReserve }
)(ReservationSeats);
