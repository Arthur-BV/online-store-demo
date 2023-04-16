import React from "react";

import Logo from "../assets/images/logo.svg";
import XButton from "../components/Button/XButton";

import "../assets/styles/main.css"

const MainPage = () => {
    const handleClick = (props) => {
        console.log(props);
        alert(props);
    };
        
    return (
        <div className="page-content">
            <XButton id="login_btn" text="Login" name="login_btn" icon="icon-basic" clickHandler={() => handleClick("Login Click!")} />
            <br />
            <XButton id="register_btn" text="Register" name="register_btn" clickHandler={() => handleClick("Register Click!")} isDisabled />
            <br />
            <XButton id="sample_btn" text="Sample Button" name="sample_btn" clickHandler={() => handleClick("Sample Click!")} />
            <br />
            <img src={Logo} className="App-Logo" alt="Main Logo" />
            <br />
            <XButton id="btn_with_img" text="Image Button" name="image_btn" icon="icon-basic" />
            <br />
            <span className="feature-box__icon icon-basic"></span>
        </div>
    );
};

export default MainPage;
