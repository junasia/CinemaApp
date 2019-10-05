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
            <footer className="foot bg-secondary" style={{ position: 'fixed', bottom: '0' }}>
                <p className="m-0">{'\u00A9 wiatrgonifale'}</p>
            </footer>
        </HashRouter>
    );
};

export default App;
