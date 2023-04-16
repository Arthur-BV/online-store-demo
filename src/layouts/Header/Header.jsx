import React from "react";

import Logo from "../../assets/images/logo.svg";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-main">
            <div className="logo-place">
                <img src={Logo} className="App-Logo" alt="Main Logo" />
            </div>
            
            <div className="dropdown">
                <button className="dropbtn">Catalog</button>
                <div className="dropdown-content">
                    <a href="/">Category 1</a>
                    <a href="/">Category 2</a>
                    <a href="/">Category 3</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Shop</button>
                <div className="dropdown-content">
                    <a href="/">Shop 1</a>
                    <a href="/">Shop 2</a>
                    <a href="/">Shop 3</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
