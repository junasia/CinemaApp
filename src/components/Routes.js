import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Program from './Program';
import Film from './Film';
import Reservation from './Reservation';
import Prices from './Prices';

const Router = () => {
    return (
        <Switch className="router d-flex flex-column align-items-center">
            <Route path="/" exact component={Program} />
            <Route path="/prices" exact component={Prices} />
            <Route path="/film/:id" exact component={Film} />
            <Route path="/reservation" exact component={Reservation} />
        </Switch>
    );
};

export default Router;
