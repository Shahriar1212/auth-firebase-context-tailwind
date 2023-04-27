import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {

    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            {
                user && <div>
                    <h1>User : {user.email}</h1>
                </div>
            }
        </div>
    );
};

export default Home;