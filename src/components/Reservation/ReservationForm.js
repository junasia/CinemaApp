import React from 'react';
import { Link } from 'react-router-dom';

const ReservationForm = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center position-relative pb-5">
                <div className="jumbotron pt-3 mt-3 width-80">
                    <h1 className="display-4">Provide contact details</h1>
                    <p className="lead">We will send you the reservation confirmation to the e-mail address.</p>
                    <hr className="my-4" />
                    <h5>Reservation details:</h5>
                    <div className="row">
                        <div className="col-sm">
                            <p className="font-weight-bold m-0">Title: </p>
                            <p>The Lion King</p>
                        </div>
                        <div className="col-sm">
                            <p className="font-weight-bold m-0" className="m-0">
                                Date:
                            </p>
                            <p>02.10.2019</p>
                        </div>
                        <div className="col-sm">
                            <p className="font-weight-bold m-0" className="m-0">
                                Time:
                            </p>
                            <p>15:00</p>
                        </div>
                        <div className="col-sm">
                            <p className="font-weight-bold m-0" className="m-0">
                                Seats:
                            </p>
                            <p>B2 B3</p>
                        </div>
                    </div>
                </div>

                <ul className="list-group list-group-flush width-80">
                    <li className="list-group-item">
                        <form className="personalInfoForm" id="form1">
                            <div className="form-group row">
                                <label htmlFor="firstNameInput" className="col-sm-3 col-form-label">
                                    First name
                                </label>
                                <div className="col-sm-9">
                                    <input
                                        type="text"
                                        className="form-control"
                                        min="2"
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

                            <Link to="/done" role="button">
                                <button type="submit" form="form1" className="btn btn-success">
                                    Next
                                </button>
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ReservationForm;
