import React from "react";
import classes from './Button.module.css';

const Button = (props) => {
  
    return(
        <div className={classes.Button} style={props.styling}>
            <button onClick={props.clicked} >{props.text}</button>
        </div>
    );
}

export default Button;