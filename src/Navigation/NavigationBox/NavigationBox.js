import React, {useState} from "react";
import classes from './NavigationBox.module.css';
import LeftNav from "./LeftNav/LeftNav";
import RightNav from "./RightNav/RightNav";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Context from "../../Context/Context";


const NavigationBox = (props) => {

    const [itemIndex, setItemIndex] = useState(null);
    console.log('Inside NavigationBox: ' , itemIndex);

    const changeItemIndex = (i) => {
        console.log('Inside changeItemName: ', i);
        setItemIndex(i);
    }

    console.log('Inside NavigationBox before Return: ', itemIndex);

    return(

        
        <div className={classes.NavigationBox}>
            <Context.Provider value={{itemIndex, changeItemIndex}}>
                <LeftNav name={props.name}/>
                <RightNav name={props.name}/>
            </Context.Provider>

        </div>

    );
  
}

export default NavigationBox;
