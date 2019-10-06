import React from 'react';
import Navbar from './Navbar';
import Routes from './Routes';
import { HashRouter } from 'react-router-dom';
import '../css/style.css';

const App = () => {
    return (
        <HashRouter>
            <Navbar />
            <div id="container" className="d-flex flex-column align-items-center position-relative pb-5">
                <Routes />
                <footer className="foot bg-secondary">
                    <p className="m-0">{'\u00A9 wiatrgonifale'}</p>
                </footer>
            </div>
        </HashRouter>
    );
};

export default App;
