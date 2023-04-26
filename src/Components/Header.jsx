import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl">Auth Master</Link>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/Login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/Register" className="btn btn-ghost normal-case text-xl">Register</Link>
            </div>
        </div>
    );
};

export default Header;