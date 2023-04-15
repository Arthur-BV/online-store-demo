/**
 * Button component parametrs:
 *   id
 *   className
 *   onClick
 *   name
 *   value 
 *   isDisabled
 *   text
 *   icon
 */
import React from "react";
import "./XButton.css"

const Button = (props) => {
    const btnEnableDisable = !props.isDisabled ? "btn-enabled" : "btn-disabled";
    return (
        <button type="button"
                id={props.id} 
                className={`my_btn ${btnEnableDisable}`} 
                onClick={props.clickHandler}  
                disabled={props.isDisabled}
                name={props.name}
                value={props.value}
        >
            <span className="btn_text">{props.text}</span>{' '}
            <span className={`feature-box__icon ${props.icon}`}></span>
            {/* <span className="btn__icon"><i className={`feature-box__icon ${props.icon}`}></i></span> */}
        </button>
    );
};

Button.defaultProps = {
    type: "button",
    disabled: false
};

export default Button;
