import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 bg-black text-white items-center justify-items-center p-5" >

            <div className="socialMedia flex flex-col">
                <a href="https://www.facebook.com/noman.apparel.4003/" target="_blank" rel="noreferrer">facebook</a>
                <a href="https://twitter.com/Noman4003" target="_blank" rel="noreferrer">twitter</a>
                <a href="https://www.linkedin.com/in/abdulla-al-noman/" target="_blank" rel="noreferrer">linkedin</a>
            </div>

            <div className="contract flex flex-col">
                <h2 className="text-orangeDip text-2xl font-medium py-3">Contact </h2>
                <p>Email: noman.programminghero@gmail.com</p>
                <p>Phone: +880 1797701620</p>
                <p>Dhaka , Bangladesh</p>
            </div>

            <div className="InFormation flex flex-col">
                <h2 className="text-2xl font-medium py-3 text-orangeDip">Information</h2>
                <Link to="/aboutUs">About us</Link>
                <Link to="/privacy">Privacy policy</Link>
                <Link to="/refunds">Refunds policy</Link>
                <Link to="/terms">Terms of use</Link>
            </div>

            <div className="famous-service flex flex-col">
                <h2 className="text-2xl font-medium py-3 text-orangeDip">Famous Service</h2>
                <Link to="/">Psd To Html</Link>
                <Link to="/">Stunning UI/UX</Link>
                <Link to="/">E-commerce</Link>
            </div>
        </div>
    );
};

export default Footer;