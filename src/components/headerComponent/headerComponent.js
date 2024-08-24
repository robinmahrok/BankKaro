import React from 'react';
import './headerComponent.css';
import { signInLogo } from '../../images';
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <nav className="navbar">
                <div className="logo">BANK<span className="highlight">KARO</span></div>
                <div className="nav-links">
                    <div className="dropdown">
                        <button className="dropbtn">
                            OUR PRODUCTS <FaChevronDown className="dropdown-icon" />
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Product 1</a>
                            <a href="#">Product 2</a>
                            <a href="#">Product 3</a>
                        </div>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">
                            TOOLS <FaChevronDown className="dropdown-icon" />
                        </button>
                        <div className="dropdown-content">
                            <a href="#">Tool 1</a>
                            <a href="#">Tool 2</a>
                            <a href="#">Tool 3</a>
                        </div>
                    </div>
                    <a href="#">BLOGS</a>
                    <a href="#">ABOUT US</a>
                </div>
                <div className='signin'>
                    <button className="sign-in-btn">
                        <span>Sign In</span>
                    </button>
                    <img src={signInLogo} alt="User" className="user-icon" />
                </div>
            </nav>
            <div className="gradient-line"></div>
        </>
    );
};

export default Header;
