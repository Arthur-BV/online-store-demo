import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";
import Logo from "../../assets/images/logo.svg";
import XButton from "../Button/XButton"

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = (props) => {
        console.log(props);
        alert(props);
    };

    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
             <div className="logo-place">
                 <img src={Logo} className="App-Logo" alt="Main Logo" />
             </div>

            <div className="container">
                <div className="navbar-brand">
                    <a href ="/" role="button" className={`navbar-burger burger ${isOpen && "is-active"}`} aria-label="menu" aria-expanded="false" onClick={() => setOpen(!isOpen)}>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div className={`navbar-menu ${isOpen && "is-active"}`}>
                    <div className="navbar-start">
                        <NavLink className="navbar-item" activeClassName="is-active" to="/">
                            Home
                        </NavLink>

                        <NavLink className="navbar-item" activeClassName="is-active" to="/catalog">
                            Catalog
                        </NavLink>

                        <NavLink className="navbar-item" activeClassName="is-active" to="/contacts">
                            Contacts
                        </NavLink>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <XButton id="login_btn" text="Login" name="login_btn" icon="icon-basic" clickHandler={() => handleClick("Login Click!")} />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
