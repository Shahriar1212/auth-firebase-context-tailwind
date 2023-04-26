import React, { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../providers/AuthProviders';

const PrivateRoute = ({children}) => {

    const {user} = useContext(AuthContext);
    console.log(user);

    if(user) {
        return children;
    }

    return <Navigate to='/login' relative={true}></Navigate>
};

export default PrivateRoute;