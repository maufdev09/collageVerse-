import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
            <h1>{user}</h1>
        </div>
    );
};

export default Home;