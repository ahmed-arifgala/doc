import React from "react";
import classes from './LeftNav.module.css';
import { Hospital } from "../../../StateData/NavData/NavData";
import NavigationItem from "../../NavigationItems/NavigationItem/NavigationItem";

const LeftNav = (props) => {

    let output =[];

    if(props.name === 'Doctor'){
        output = ['Search Doctor By Speciality', 'Search Doctor By Condition', 'Search Doctor By Treatment', 'Search Online Doctors'];
    }else if (props.name === 'Hospital'){
        
       Hospital.forEach((obj)=> output.push('Hospital in ' + Object.keys(obj)[0]));

        console.log('INSIDE LEFT NAV IF: OUTPUT: ', output);
    }

    return(
        <div className={classes.LeftNav}>

            <div className={classes.Logo}>
                DOC NEXT DOOR
            </div>

            <div className={classes.Head}>
                <div className={classes.Button} onClick={props.closeHandler}>X</div>
                <div className={classes.Heading}>{props.name}</div>
            </div>
            
            <div className={classes.List}>
                <ul>
                    {output.map((ele, i) => (
                            <NavigationItem key={ele} 
                                            link={'./'} 
                                            class={classes.NavigationItem} 
                                            def={i} 
                                            isHover={true} > 
                                {ele} 
                            </NavigationItem>
                    ))}
                </ul>

            </div>
            

        </div>
    );
}

export default LeftNav;