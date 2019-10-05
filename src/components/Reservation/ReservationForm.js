import React from "react";
import { Link } from "react-router-dom";

const ReservationForm = () => {
    return (
        <div>
    <container class="d-flex flex-column align-items-center position-relative pb-5">
        <div class="jumbotron pt-3 mt-3 width-80">
            <h1 class="display-4">Provide contact details</h1>
            <p class="lead">We will send you the reservation confirmation to the e-mail address.</p>
            <hr class="my-4" />
            <h5>Reservation details:</h5>
            <div class="row">
            <div class="col-sm">
                <p class="font-weight-bold m-0">Title: </p>
                <p>The Lion King</p>
            </div>
            <div class="col-sm">
                <p class="font-weight-bold m-0" class="m-0">Date:</p>
                <p>02.10.2019</p>
            </div>
            <div class="col-sm">
                <p class="font-weight-bold m-0" class="m-0">Time:</p>
                <p>15:00</p>
            </div>
            <div class="col-sm">
                <p class="font-weight-bold m-0" class="m-0">Seats:</p>
                <p>B2 B3</p>
            </div>
        </div>
        </div>

        <ul class="list-group list-group-flush width-80">
            <li class="list-group-item">
                <form class="personalInfoForm" id="form1">
                    <div class="form-group row">
                        <label for="firstNameInput" class="col-sm-3 col-form-label">First name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" min="2" id="firstNameInput" placeholder="First name" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lastNameInput" class="col-sm-3 col-form-label">Last name</label>
                        <div class="col-sm-9">
                            <input type="text" class="form-control" min="2" id="lastNameInput" placeholder="Last name" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="phoneInput" class="col-sm-3 col-form-label">Phone</label>
                        <div class="col-sm-9">
                            <input type="number" class="form-control" min="4" id="phoneInput" placeholder="Phone" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="emailInput" class="col-sm-3 col-form-label">Email adress</label>
                        <div class="col-sm-9">
                            <input type="email" class="form-control" id="emailInput" placeholder="Email adress" required />
                        </div>
                    </div>
                    <div class="form-group text-center">
                        <small class="text-muted">Provided informations will be used only for reservation purposes. We'll never share it with anyone else.</small>
                    </div>
                </form>
                <div class="d-flex justify-content-around">
                    <button type="button" href="seats.html" class="btn btn-warning">Back</button>
                    <button type="submit" href="confirmation.html" form="form1" class="btn btn-success">Next</button>
                </div>                
            </li>
        </ul>
        <footer class="foot bg-secondary">
            <p class="m-0">&copy wiatrgonifale</p>
        </footer>
    </container>
            {/* <Link to="/done">To Done</Link> */}
        </div>
    );
};

export default ReservationForm;
