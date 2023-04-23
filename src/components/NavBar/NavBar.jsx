import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import Logo from "../../assets/images/logo.svg";
import XButton from "../Button/XButton"

const NavBar = () => {
    const handleClick = (props) => {
        console.log(props);
        alert(props);
    };

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
             <div className="logo-place">
                 <img src={Logo} className="App-Logo" alt="Main Logo" />
             </div>

            <div className="navbar-menu">
                <div className="navbar-start">
                    <NavLink className="navbar-item" to="/">
                        Home
                    </NavLink>

                    <NavLink className="navbar-item" to="/catalog">
                        Catalog
                    </NavLink>

                    <NavLink className="navbar-item" to="/contacts">
                        Contacts
                    </NavLink>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <XButton id="login_btn" text="Login" name="login_btn" icon="icon-basic" clickHandler={() => handleClick("Login Click!")} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
