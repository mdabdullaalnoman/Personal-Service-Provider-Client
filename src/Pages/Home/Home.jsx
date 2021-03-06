import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Nav from '../../SharedComponent/Nav';
import Hero from './Hero';
import Service from './Service';

const Home = () => {
    return (
        <div>
            <Nav />
            <Hero />
            <Service />
            <Footer />
        </div>
    );
};

export default Home;