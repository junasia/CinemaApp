import React from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import { HashRouter } from 'react-router-dom';
import '../css/style.css';

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <Routes />
        </HashRouter>
    );
};

export default App;
