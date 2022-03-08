import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Nav from '../../SharedComponent/Nav';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Nav />
            <Hero/>
            <Footer/>
        </div>
    );
};

export default Home;