import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import Program from './Program';
import Film from './Film';
import Reservation from './Reservation';

const Router = () => {
    return (
        <Switch className="router">
            <Route path="/" exact component={Main} />
            <Route path="/program" exact component={Program} />
            <Route path="/film/:id" exact component={Film} />
            <Route path="/reservation" exact component={Reservation} />
        </Switch>
    );
};

export default Router;
