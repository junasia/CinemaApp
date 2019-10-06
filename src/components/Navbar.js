import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar sticky-top navbar-expand-lg navbar-dark bg-primary">
            <Link to="/">
                <span className="navbar-brand mb-0 h1">
                    Cinema Town <small className="navbar-band">the best cinemas</small>
                </span>
            </Link>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">
                            Program
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/prices">
                            Prices
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
