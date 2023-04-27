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
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
                {
                    user && <Link to="/profile" className="btn btn-ghost normal-case text-xl">Profile</Link>
                }
                <Link to="/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
            
                {
                    user ? <div>
                       <span>{user && user.email}</span> 
                       <button className="btn btn-xs" onClick={handleLogOut}>Sigh Out</button>
                    </div> : <></>
                }
            </div>
        </div>
    );
};

export default Header;