import React, {useContext} from "react";
import classes from './LeftSideSec.module.css'
import SectionCard from "./SectionCard/SectionCard";
import context from "../../../../Context/Context";
import Review from "../../Review/Review";
import ReviewOverview from "../../Review/ReviewOverview/ReviewOverview";
import starAnimated from '../../../../assets/images/Icons/star-animated2 (1).gif';

const LeftSideSec = () => {
    
    const {docInfo, userReview} = useContext(context);
    const sectionList = ['services', 'conditionsTreated', 'surgeriesPerformed','specialization','professionalMemberships', 'languagesSpoken']
     
    return(
        <div className={classes.LeftSideSec}>

            <div className={classes.ReviewOverview}>
                <img src={starAnimated} />
                <h1>Ratings and Reviews of {docInfo.name} <span style={{color: 'rgb(119, 115, 115)', fontWeight: '500'}}>({docInfo.noOfReviews})</span> </h1>
            </div>
            <ReviewOverview satisfaction={docInfo.satisfiedPatients}  overview={userReview.overview}/>


            {
                sectionList.map(
                    (key)=> {
                        const convertedKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase());
                        return (
                            docInfo[key].length!==0 ? 
                            <SectionCard heading={convertedKey} data={docInfo[key]}/> : null
                        );
                    }
                )
            }



            <Review name={docInfo.name} noOfReviews={docInfo.noOfReviews}/>
           
        </div>
        
    );
}

export default LeftSideSec;