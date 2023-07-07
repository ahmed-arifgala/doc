import React, {useContext} from "react";
import classes from './NavigationItem.module.css';
import context from "../../../Context/Context";
const NavigationItem = props => {

    console.log('NavigationItem called');

    const classNames = [classes.NavigationItem, props.class].join(' ');

    const {changeItemIndex} = useContext(context);
    


    return(

        <li className={classNames} >
            
            <a 
                href={props.link} 
                className={props.active ? classes.active : null} 
                onMouseOver={ props.isHover ? ()=>changeItemIndex(props.def) : null}
                >
                    {props.children}
                
            </a>

        </li>
    );
    

};

export default NavigationItem;