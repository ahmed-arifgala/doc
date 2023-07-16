import React, {useEffect} from "react";
import classes from './IconButton.module.css';
import consultation from '../../../assets/images/Icons/appointment1.png';
import profile from '../../../assets/images/Icons/profile.png';

const Button = (props) => {

    const classNames = [classes.IconButton, props.passedClass];

    return(
        <div className={classNames.join(' ')}>

            <button onClick={props.clicked}>
                <img src={props.id == 'consultation' ? consultation : profile } alt='icon' />
                {props.children}
            </button>

        </div>
    );
}

export default Button;
