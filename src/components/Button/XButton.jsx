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
                className={`x_btn ${btnEnableDisable}`} 
                onClick={props.clickHandler}  
                disabled={props.isDisabled}
                name={props.name}
                value={props.value}
        >
            <span className={`x_btn__text ${props.icon}`}>{props.text}</span>
        </button>
    );
};

Button.defaultProps = {
    type: "button",
    disabled: false
};

export default Button;
