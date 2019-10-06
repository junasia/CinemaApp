import React from 'react';
import { connect } from 'react-redux';

class FormInformation extends React.Component {
    render() {
        console.log('ressss: ', this.props.reservation);
        return (
            <div className="jumbotron pt-3 mt-3 width-80">
                <h1 className="display-4">Provide contact details</h1>
                <p className="lead">We will send you the reservation confirmation to the e-mail address.</p>
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
                                    x => x._id === this.props.reservation.seance
                                ).hour
                            }
                        </p>
                    </div>
                    <div className="col-sm">
                        <p className="font-weight-bold m-0">Seats:</p>
                        <p>
                            {this.props.reservation.reservations.map(x => {
                                let seat = x.split('/');
                                return (
                                    String.fromCharCode('A'.charCodeAt() + parseInt(seat[0])) + (parseInt(seat[1]) + 1)
                                );
                            })}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { reservation: state.reservation };
};

export default connect(mapStateToProps)(FormInformation);
