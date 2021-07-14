import React from 'react';
import AnyQuestion from '../AnyQuestion/AnyQuestion';
import Apartments from '../Apartments/Apartments';
import Background from '../Background/Background';
import BrandArea from '../BrandArea/BrandArea';
import Category from '../Category/Category';
import ClientFeedbacks from '../ClientFeedbacks/ClientFeedbacks';
import Features from '../Features/Features';
import Navbar from '../Navbar/Navbar';
const Home = () => {
    return (
        <div>
            <Navbar/>
            <Background/>
            <Category/>
            <Features/>
            <AnyQuestion />
            <BrandArea />
            <ClientFeedbacks />
            <Apartments/>
        </div>
    );
};

export default Home;