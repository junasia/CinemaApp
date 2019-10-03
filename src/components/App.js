import React from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import ProgramSettings from './ProgramSettings'
import { HashRouter } from 'react-router-dom';
import '../css/style.css';

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <ProgramSettings />
            <Routes />
        </HashRouter>
    );
};

export default App;
