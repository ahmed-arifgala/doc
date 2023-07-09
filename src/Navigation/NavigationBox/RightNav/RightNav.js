import React, {useContext, useState, useEffect} from "react";
import classes from './RightNav.module.css';
import { Doctor, Hospital } from "../../../StateData/NavData/NavData";
import NavigationItem from "../../NavigationItems/NavigationItem/NavigationItem";
import context from "../../../Context/Context";
import lahoreImg from '../../../assets/images/NavImages/badshahiMosque.jpg';

const RightNav = (props) => {

    const [image, setImage] = useState('');

    console.log('Inside RightNav', props.name);

    const {itemIndex} = useContext(context);
    const [output, setOutput] = useState({});

    console.log('Inside RightNav', itemIndex);


    useEffect(() => {
        if (props.name === 'Doctor') {
            console.log('Inside IF');
            setOutput(Doctor[itemIndex]);
        } else if (props.name === 'Hospital') {
            setOutput(Hospital[itemIndex]);
                        // console.log("Inside IF: " , Hospital[itemIndex][Object.keys(Hospital[itemIndex])[1]])
            
            
        }
    }, [props.name, itemIndex, output]);

    
    // useEffect(() => {
    //         console.log('Inside 2nd useEffect');
    //         settingImage(output);
    //     }, [output, itemIndex, props.name, image]);
        
    // function settingImage(ob) {
    //     console.log('Setting Image called', ob);
    //     setImage(ob.img);
    //     console.log('obj.img', ob.img);
    //     console.log('Image', image);
    // };

    console.log(output)

    return(

        
        <div className={classes.RightNav} >
    
             
        
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