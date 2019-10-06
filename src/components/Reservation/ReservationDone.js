import React from 'react';

const ReservationDone = () => {
    return (
        <div>
            <div className="d-flex flex-column align-items-center">
                <div className="jumbotron pt-3 mt-3 width-80">
                    <h1 className="display-4">Success!</h1>
                    <p className="lead">
                        The confirmation resrevation has been succesfully sent to provided email adress. Show it at the
                        Box Office and buy your tickets no later than 30 minutes before the screening. See you soon!
                    </p>
                    <hr className="my-4" />
                    <h5>Reservation details:</h5>
                    <div className="row">
                        <div className="col-sm">
                            <p className="font-weight-bold m-0">Title: </p>
                            <p>The Lion King</p>
                        </div>
                        <div className="col-sm">
                            <p className="font-weight-bold m-0">Date:</p>
                            <p>02.10.2019</p>
                        </div>
                        <div className="col-sm">
                            <p className="font-weight-bold m-0">Time:</p>
                            <p>15:00</p>
                        </div>
                        <div className="col-sm">
                            <p className="font-weight-bold m-0">Seats:</p>
                            <p>B2 B3</p>
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
};

export default ReservationDone;
