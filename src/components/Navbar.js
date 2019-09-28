import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div
            style={{
                background: '#ccc',
                padding: '5px'
            }}
        >
            <Link to="/"> To Main</Link>
            <Link to="/program"> To Program</Link>
            <Link to="/reservation"> To Reservation</Link>
        </div>
    );
};

export default Navbar;
