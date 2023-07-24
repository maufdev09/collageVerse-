import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import Search from '../Components/SearchSection';

const Home = () => {
    const { user } = useContext(AuthContext);

    return (
        <div>
          <Search></Search>
        </div>
    );
};

export default Home;