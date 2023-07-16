import React from "react";
import classes from './DocSec.module.css';
import LocCard from "./LocCard/LocCard";
import IconButton from '../../../../UI/Buttons/IconButton/IconButton';
import icon from '../../../../assets/images/Icons/videoCon2.png'


const DocSec = ({docInfo, locData}) => {


    return(
        <div className={classes.DocSec}>
            
            <div className={classes.DocSecInfo} >
                
                <div className={classes.Image}>
                    <img src={require(`../../../../assets/images/docImgs/${docInfo.docImg}`)} alt="Doctor's Image" />
                </div>
                    
                <div className={classes.Info}>
                    
                    <div>
                        <h1>{docInfo.name}</h1>
                        <h3>{docInfo.specialization
                            .map(
                                (sp, i) => i!=docInfo.specialization.length - 1 ? sp + ', ' : sp )}
                        </h3>
                        <h3>{docInfo.education
                            .map(
                                (edu, i) => i!= docInfo.education.length - 1 ? edu.degree + ', ' : edu.degree)}
                        </h3>
                    </div>

                    <div className={classes.ExtraInfo}>
                        <div>
                            <h3>Waiting Time</h3>
                            <p>{docInfo.waitTime + ' mins'}</p>
                        </div>
                        <div>
                            <h3>Experience</h3>
                            <p>{docInfo.experience}</p>
                        </div>
                        <div>
                            <h3>Satisfied Patients</h3>
                            <p>{((docInfo.satisfiedPatients)*100)+ '% ' + `(${docInfo.noOfReviews})`}</p>
                        </div>
                    </div>
                        

                </div>

            </div>
            {/* {console.log(docInfo.name)}; */}

            <div className={classes.LocCardSec}>
            {/* {console.log(Object.keys(locData))} */}
                {
                    
                   (Object.keys(locData).slice(1, 4)).map( (obj, ki) => {
                    // {console.log(locData[obj])}
                    return(
                        locData[obj].map((sObj, i)=>(
                            
                            <LocCard 
                                key={sObj+ i} 
                                ImgIndex={ki} 
                                locData={sObj} 
                            />
                        ))
                    );
                   })
                 
                };

                </div>



                <div className={classes.ButtonSec}>
                
                    <IconButton id='profile'> View Profile </IconButton>
                    <IconButton 
                            id = 'consultation'
                            passedClass={classes.Button2} 
                            // iconAdd='../../../assets/images/Icons/appointment1.png'
                         > 
                                Book Appointment 
                    </IconButton>

                </div>


        </div>
    


    );
}

export default DocSec;
