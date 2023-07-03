import React, {useContext} from "react";
import classes from './DocCard.module.css';
import context from "../../../Context/Context";

const DocCard = () => {
    
    const {docInfo} = useContext(context);

    return(
        <div className={classes.DocCard}>
            
        <div className={classes.Image}><img src={require(`../../../assets/images/docImgs/${docInfo.docImg}`)} alt="Doctor's Image" /></div>
            {console.log(docInfo.docImg)}
            
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
    
    );
    
};



export default DocCard