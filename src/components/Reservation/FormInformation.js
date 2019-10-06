import React from 'react';

const FormInformation = () => {
    return (
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
        </div>
    );
};

export default FormInformation;
