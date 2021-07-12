import React from 'react';
import AnyQuestion from '../AnyQuestion/AnyQuestion';
import Background from '../Background/Background';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Background/>
            <AnyQuestion />
        </div>
    );
};

export default Home;