import { Switch, MemoryRouter, Route, Redirect } from "react-router-dom";
import React from "react";
import ReservationSeats from "./ReservationSeats";
import ReservationForm from "./ReservationForm";
import ReservationDone from "./ReservationDone";

const Reservation = () => {
    return (
        <MemoryRouter basename={"reservation"}>
            <Redirect to="/seats" />
            <Switch>
                <Route path="/seats" exact component={ReservationSeats} />
                <Route path="/form" exact component={ReservationForm} />
                <Route path="/done" exact component={ReservationDone} />
            </Switch>
        </MemoryRouter>
    );
};

export default Reservation;
