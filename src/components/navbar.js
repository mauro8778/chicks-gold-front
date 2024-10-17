import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa';
import '../styles/navbar.css';

const Navbar = () => {
    const cartCount = 2;
    return (
        <>
            <nav className="navbar">
                <div className="logo">
                    <img src="/chicks.svg" alt="Logo" />
                </div>
                <span className="separator"></span>
                <ul>
                    <li><Link to="/">Currency</Link></li>
                    <li><Link to="/about">Items</Link></li>
                    <li><Link to="/contact">Accounts</Link></li>
                    <li><Link to="/services">SERVICES</Link></li>
                    <li><Link to="/swap">Swap</Link></li>
                    <li><Link to="/sell">SELL</Link></li>
                </ul>
                <div className="navbar-right">
                    <div className="country-dropdown">
                        <select>
                            <option value="US">USD</option>
                            <option value="AR">ARG</option>
                            <option value="ES">ESP</option>
                        </select>
                    </div>
                    <div className="cart-icon">
                        <FaShoppingCart size={24} color="white" />
                        <span className="cart-text"> cart({cartCount})</span>
                    </div>

                    <button className="login-button">
                        Sign In
                        <FaUserCircle size={20} color="black" className="icon" />
                    </button>

                </div>
            </nav>
            <div className="navbar-line"></div>
        </>
    );
};

export default Navbar;
