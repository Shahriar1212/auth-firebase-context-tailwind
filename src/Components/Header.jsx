import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const Header = () => {

    const {user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then(()=>{})
        .then(error => {
            console.error(error);
        })
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <Link className="btn btn-ghost normal-case text-xl">Auth Master</Link>
                <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
                <Link to="/Login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/Register" className="btn btn-ghost normal-case text-xl">Register</Link>
            
                {
                    user ? <div>
                       <span>{user.email}</span> 
                       <button className="btn btn-xs" onClick={handleLogOut}>Sigh Out</button>
                    </div> : <Link to="/login">Login</Link>
                }
            </div>
        </div>
    );
};

export default Header;