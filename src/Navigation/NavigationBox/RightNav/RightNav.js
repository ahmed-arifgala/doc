import React, {useContext, useState, useEffect} from "react";
import classes from './RightNav.module.css';
import { Doctor, Hospital } from "../../../StateData/NavData/NavData";
import NavigationItem from "../../NavigationItems/NavigationItem/NavigationItem";
import context from "../../../Context/Context";

const RightNav = (props) => {

    console.log('Inside RightNav', props.name);

    const {itemIndex} = useContext(context);
    const [output, setOutput] = useState({});

    console.log('Inside RightNav', itemIndex);


    useEffect(() => {
        if (props.name === 'Doctor') {
            console.log('Inside IF');
            setOutput(Doctor[itemIndex]);
        } else if (props.name === 'Hospital') {
            // setOutput(Hospital);
        }
    }, [props.name, itemIndex]);

    console.log(output);

   
    return(
        <div className={classes.RightNav}>
    
            {output && console.log('Inside Return', Object.keys(output))}
        
                {output && 
                    <div className={classes.List} >
                        <ul>
                            { output[Object.keys(output)[0]] &&
                            
                                output[Object.keys(output)[0]].map((item, i)=>(
                                    <NavigationItem 
                                            key={item+i} 
                                            link={'./'} 
                                            class={classes.NavigationItem}
                                            isHover={false}>
                                                {item}

                                    </NavigationItem>
                                ))
                            }

                        </ul>
                    </div>
                }
                   
        </div>
    );
}

export default RightNav;