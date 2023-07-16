import React, {useContext, useState, useEffect} from "react";
import classes from './RightNav.module.css';
import { Doctor, HospitalData } from "../../../StateData/NavData/NavData";
import NavigationItem from "../../NavigationItems/NavigationItem/NavigationItem";
import context from "../../../Context/Context";

const RightNav = (props) => {

    const [index, setIndex] = useState(0);
    console.log('Inside RightNav', props.name);
    const [docImgArr,setDocImgArr]  = useState(['Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar']);
    const [hosImgArr,setHosImgArr]  = useState(['Specialization', 'Conditions', 'Treatment', 'Online']);
    const {itemIndex, rightItemIndex} = useContext(context);
    const [output, setOutput] = useState({});

    console.log('Inside RightNav', itemIndex);

    console.log('Inside RightNav', rightItemIndex);

    useEffect(() => {
        setIndex(itemIndex);

        if (props.name === 'Doctor') {
            console.log('Inside IF');
            setOutput(Doctor[itemIndex]);
        } else if (props.name === 'Hospital') {
            setOutput(HospitalData[itemIndex]);
          
        }

    }, [props.name, itemIndex, output, docImgArr, hosImgArr]);


    console.log(output)

    return(

        
        <div className={classes.RightNav} style={
            props.name === 'Hospital' ? index ? {
            backgroundImage: `url(${require(`../../../assets/images/NavImages/${docImgArr[index]}.jpg`)})`
          } : {
            backgroundImage: `url(${require(`../../../assets/images/NavImages/${docImgArr[0]}.jpg`)})`
          }
        
          : props.name === 'Doctor' && index ? {
            backgroundImage: `url(${require(`../../../assets/images/NavImages/${hosImgArr[index]}.jpg`)})`
          } : {backgroundImage: `url(${require(`../../../assets/images/NavImages/${hosImgArr[0]}.jpg`)})`}

        }>
            {console.log(index)}
          
                {output && 
                    <div className={classes.List} >
                        <ul>
                            { output[Object.keys(output)[0]] &&
                            
                                output[Object.keys(output)[0]].map((item, i)=>(

                                    <NavigationItem 
                                            key={item+i} 
                                            link={'./'} 
                                            class={classes.NavigationItem}
                                            isHover={false}
                                            def={i}
                                            rightItemName ={item}
                                            isRight = {true}
                                            itemIndex={itemIndex}
                                            toolbarName = {props.name}
                                            icon={props.name !== 'Hospital' }
                                            closeHandler= {props.closeHandler}
                                    >
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