import React from "react";
import {detailInfo, FAQData } from "../../../StateData/DocData/DocData";
import DocSec from "./DocSec/DocSec";
import classes from './DocMainSec.module.css';
import DetailInfoSec from "./DetailInfoSec/DetailInfoSec";



const DocMainSec = ({docData, locData, handler}) => {
    return(

        <div className={classes.DocMainSec}>

            
            {/* <div>
                <button onClick={()=>handler('male')}>Male Doctors</button>
                <button onClick={()=>handler('female')}>Female Doctors</button>
                <button onClick={()=>handler('satisfaction')}>Most Satisfied</button>
                <button onClick={()=>handler('experience')}>Most Experienced</button>
                <button onClick={()=>handler('platinum')}>Video Consultation</button>
                <button onClick={()=>handler('fees')}>Lowest Fees</button>
                <button onClick={()=>handler('clinic')}>Clinic Doctor</button>
            </div> */}
                {
                    docData.map((item, index) => {
                        {console.log('In docmainSec: ',locData[index])}
                        return <DocSec key={index} docInfo = {item} locData= {locData[index]} />
                    })
                }
        </div>
    ); 
}

export default DocMainSec;