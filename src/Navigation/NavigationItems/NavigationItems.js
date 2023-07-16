import React, {useState} from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from './NavigationItems.module.css';
import NavigationBox from "../NavigationBox/NavigationBox";
import Aux from "../../hoc/Auxiliary/Auxiliary";

const NavigationItems = ()=>{
    
    const [NavBoxContent, setNavBoxContent] = useState(null);
    const [showNavBar, setShowNavBar] = useState(false);

    const CloseNavBox = ()=>{
        setNavBoxContent(
            <NavigationBox 
                    name={'closing'} 
                    show={false} 
                    closeHandler={CloseNavBox} 
            />
       );
        setShowNavBar(true);
    };



    const NavigationItem = (name) => {
       setNavBoxContent(
            <NavigationBox 
                    name={name} 
                    show={true} 
                    closeHandler={CloseNavBox} 
            />
       );

       setShowNavBar(true);
       
    }

    

    return(

        <Aux>

            {showNavBar && NavBoxContent}

            <ul className={classes.NavigationItems}>

                <li onClick={()=>NavigationItem('Doctor')}>Doctor</li>
                <li onClick={()=>NavigationItem('Hospital')}>Hospital</li>
                <li>Clinic</li>
                <li>Laboratory</li>
                <li>Health Blog</li>
            </ul>
        </Aux>
    );
};

export default NavigationItems;