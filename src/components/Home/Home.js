import React from 'react';
import AnyQuestion from '../AnyQuestion/AnyQuestion';
import Background from '../Background/Background';
import BrandArea from '../BrandArea/BrandArea';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Background/>
            <AnyQuestion />
            <BrandArea />
        </div>
    );
};

export default Home;