import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            {/* ===============nav logo =================*/}
            <div className="nav-img">
                <img src="" alt="" />
                <h1>logo</h1>
            </div>

            {/* =============nav menu ==================*/}
            <div className="nav-menu">
                <Link to="home">Home</Link>
                <Link to="service">Service</Link>
                <Link to="about">About</Link>
                <Link to="contract">Contract</Link>
            </div>

            {/* =================nav login button=================== */}
            <div className="login-button">
                <button>login</button>
            </div>
        </div>
    );
};

export default Nav;