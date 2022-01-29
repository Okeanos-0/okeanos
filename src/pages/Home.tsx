import React, { FC } from 'react';

import AboutMe from '../components/AboutMe';


const Home: FC = () => {
    return (
        <div>
            <AboutMe />
            <img src="assets/cat.jpg" alt="" />
        </div>
    );
};

export default Home;
