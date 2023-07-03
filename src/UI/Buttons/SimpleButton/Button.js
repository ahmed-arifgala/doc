import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
    const classNames = [classes.Button, props.className].join(' ');
        
    return(
        <div className={classNames}>
            <button onClick={props.clicked}>{props.text}</button>
        </div>
    );
}

export default Button;