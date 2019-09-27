import { MemoryRouter, Route, Redirect } from "react-router-dom";
import React from "react";
import ReservationSeats from "./ReservationSeats";
import ReservationForm from "./ReservationForm";
import ReservationDone from "./ReservationDone";

const Reservation = () => {
    return (
        <MemoryRouter basename={"reservation"}>
            <Redirect to="/seats" />
            <div>
                <Route path="/seats" exact component={ReservationSeats} />
                <Route path="/form" exact component={ReservationForm} />
                <Route path="/done" exact component={ReservationDone} />
            </div>
        </MemoryRouter>
    );
};

export default Reservation;
