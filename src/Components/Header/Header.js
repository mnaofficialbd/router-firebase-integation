import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/login">Log In</Link>

        </div>
    );
};

export default Header;