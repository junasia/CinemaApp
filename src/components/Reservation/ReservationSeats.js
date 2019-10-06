import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { reserveSeat, cancelReserve } from '../../actions';

class ReservationSeats extends Component {
    constructor(props) {
        super(props);
        this.state = { redirect: false };
    }

    clickSeatButton = e => {
        console.log(e.target);
        if (e.target.value === 'false') return;
        if (this.props.reservation.reservations.includes(e.target.id)) {
            this.props.cancelReserve(e.target.id);
        } else this.props.reserveSeat(e.target.id);
        console.log('cancle: ', this.props.reservation);
    };

    renderNumberOfSeat = seat => {
        if (seat.length === 3) {
            return seat[0] + seat[2];
        }
        return seat[0] + seat[2] + seat[3];
    };

    logSeats = () => {
        console.log(this.props, this.props.reservation);
    };

    getSeatClassName = (seat, seatId) => {
        let className;
        if (this.props.reservation.reservations.includes(seatId)) className = 'btn btn-primary btn-sm';
        else className = 'btn ' + (seat ? 'btn-success' : 'btn-danger') + ' btn-sm';
        return className;
    };

    handleClickNext = e => {
        if (this.props.reservation.reservations.length) {
            this.setState({ redirect: true });
        }
    };

    renderSeats() {
        if (!this.props.reservation.seats.length) return <div />;
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
                        {seatId}
                    </button>
                );
            }
        }
        return <div className="seats-container mt-4">{buttons}</div>;
    }

    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect push to="/form" /> : ''}
                <div className="d-flex flex-column align-items-center position-relative pb-5 pt-4">
                    <div className="jumbotron pt-3 mt-3 width-80">
                        <h1 className="display-4">Choose seat</h1>
                        <p className="lead">Find seat, which is the most suitable for you and click on it.</p>
                        <hr className="my-4" />
                        <h5>Title: The Lion King</h5>
                        <form>
                            <div className="form-row">
                                <div className="col-sm-6">
                                    <label htmlFor="inputDate">Date</label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        id="inputDate"
                                        defaultValue="2019-10-01"
                                        min="2019-10-01"
                                        max="2019-10-08"
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label htmlFor="inputTime">Time</label>
                                    <select defaultValue={'DEFAULT'} id="inputTime" className="form-control">
                                        <option value="DEFAULT">13:00</option>
                                        <option value="1">15:00</option>
                                        <option value="2">17:30</option>
                                    </select>
                                </div>
                            </div>
                        </form>
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
                                <button onClick={this.logSeats} type="button" className="btn btn-success btn-lg">
                                    CHECK PROPS
                                </button>
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
