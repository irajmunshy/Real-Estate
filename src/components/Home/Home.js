import React from 'react';
import Background from '../Background/Background';
import Category from '../Category/Category';
import Feature from '../Features/Features';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Background/>
            <Category/>
            <Feature/>
        </div>
    );
};

export default Home;