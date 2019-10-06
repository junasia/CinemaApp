import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postReservation } from '../../actions';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', phone: '', email: '', redirect: false };
    }

    handleChange = event => {
        switch (event.target.id) {
            case 'firstNameInput':
                this.setState({ firstName: event.target.value });
                break;

            case 'lastNameInput':
                this.setState({ lastName: event.target.value });
                break;

            case 'phoneInput':
                this.setState({ phone: event.target.value });
                break;

            case 'emailInput':
                this.setState({ email: event.target.value });
                break;

            default:
                break;
        }
    };

    handleSubmit = async event => {
        console.log(this.props.reservation, this.state);
        let res = {
            phone: this.state.phone,
            mail: this.state.email,
            name: this.state.firstName + ' ' + this.state.lastName,
            seance: this.props.reservation.seance,
            seats: this.props.reservation.reservations.map(r => {
                const coords = r.split('/');
                return {
                    rowNumber: coords[0],
                    seatNumber: coords[1]
                };
            })
        };
        console.log(res);
        await this.props.postReservation(res);
        this.setState({ redirect: true });
        event.persist();
    };

    render() {
        return (
            <div>
                {this.state.redirect ? <Redirect push to="/done" /> : ''}
                <ul className="list-group list-group-flush width-80">
                    <li className="list-group-item">
                        <form className="formReservation" id="formReservation" onSubmit={this.handleSubmit}>
                            <div className="form-group row">
                                <label htmlFor="firstNameInput" className="col-sm-3 col-form-label">
                                    First name
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        min="2"
                                        onChange={this.handleChange}
                                        id="firstNameInput"
                                        placeholder="First name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="lastNameInput" className="col-sm-3 col-form-label">
                                    Last name
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        min="2"
                                        onChange={this.handleChange}
                                        id="lastNameInput"
                                        placeholder="Last name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="phoneInput" className="col-sm-3 col-form-label">
                                    Phone
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="number"
                                        className="form-control"
                                        min="4"
                                        onChange={this.handleChange}
                                        id="phoneInput"
                                        placeholder="Phone"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="emailInput" className="col-sm-3 col-form-label">
                                    Email adress
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailInput"
                                        onChange={this.handleChange}
                                        placeholder="Email adress"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <small className="text-muted">
                                    Provided informations will be used only for reservation purposes. We'll never share
                                    it with anyone else.
                                </small>
                            </div>
                        </form>
                        <div className="d-flex justify-content-around">
                            <Link className="btn btn-warning" to="/" role="button">
                                Back
                            </Link>
                            <button type="submit" form="formReservation" className="btn btn-success">
                                Next
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { reservation: state.reservation };
};

export default connect(
    mapStateToProps,
    { postReservation }
)(Form);
