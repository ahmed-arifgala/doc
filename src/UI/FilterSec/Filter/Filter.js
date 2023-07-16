import React, {useState} from "react";
import classes from './Filter.module.css';
import checkMark from '../../../assets/images/Icons/checkMark.png';
import femaleDoc from '../../../assets/images/Icons/femaleDoc.png';


const Filter = ({index, name, handler}) => {


    const [rotation, setRotation] = useState(0);
    const [frontside, setFrontside] = useState(true);

    const flip = () => {
        setRotation(rotation + 180);
        setFrontside(!frontside);

        const innerFlipCards = document.querySelectorAll('#flipCardInner');
        const innerFlipCard = innerFlipCards[index];

        innerFlipCard.style.transform = `rotateY(${rotation}deg)`;
        
    }


    const handleClick = () => {
        flip();
        handler(name, frontside);
    }

    return (

        <div id='flipCard' className={classes.FlipCard} onClick={handleClick}>
           
            <div    
                    id='flipCardInner' 
                    className={classes.FlipCardInner} 
                    >

                <div className={classes.FlipCardFront}>
                    <img src={femaleDoc} /> 
                    <p className={classes.Title}>{name}</p>
                </div>
                
                <div className={classes.FlipCardBack}>
                    <img src={checkMark} alt="checkMark" />
                    <p className={classes.Title}>{name}</p>
                </div>

            </div>
        </div>
    );

}

export default Filter;