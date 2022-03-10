import React from 'react';
import Footer from '../../SharedComponent/Footer';
import Nav from '../../SharedComponent/Nav';

const AboutUs = () => {
    return (
        <div>
            <Nav />
            <div className="about">
                <h1 className="text-center text-2xl py-5 text-blue-600"> About</h1>
            </div>
            <Footer />
        </div>
    );
};

export default AboutUs;