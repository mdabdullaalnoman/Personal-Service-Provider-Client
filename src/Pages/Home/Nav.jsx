import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Media/logo.png';

const Nav = () => {
    return (
        <div className="flex justify-between items-center  px-10 py-3 drop-shadow-lg text-lg bg-white fixed top-0 left-0 right-0">
            {/* ===============nav logo =================*/}
            <div className="nav-img ">
                <img src={logo} alt="logo" className="h-16"/>
            </div>

            {/* =============nav menu ==================*/}
            <div className="nav-menu bg-grayDip text-grayText  px-10 py-5 rounded-full">
                <Link className="px-3 hover:text-white" to="/home ">Home</Link>
                <Link className="px-3 hover:text-white" to="/service ">Service</Link>
                <Link className="px-3 hover:text-white" to="/about">About</Link>
                <Link className="px-3 hover:text-white" to="/contract">Contract</Link>
            </div>

            {/* =================nav login button=================== */}
            <div className="login-button bg-orangeDip text-white rounded ring-offset-2 ring-2 ring-orangeLight hover:bg-orangeLight px-10 py-2">
                <button>login</button>
            </div>
        </div>
    );
};

export default Nav;