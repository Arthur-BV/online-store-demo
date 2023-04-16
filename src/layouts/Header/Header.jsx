import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <div className="header-main">
            <div className="dropdown">
                <button className="dropbtn">Catalog</button>
                <div className="dropdown-content">
                    <a href="/">Category 1</a>
                    <a href="/">Category 2</a>
                    <a href="/">Category 3</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
