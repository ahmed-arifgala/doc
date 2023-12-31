import React from "react";
import classes from './LocationSec.module.css';
import Button from '../../../../../UI/Buttons/SimpleButton/Button';
import Modal from "../../../../../UI/Modal/Modal";
import Aux from "../../../../../hoc/Auxiliary/Auxiliary";


const LocationSec = (props) => {
    
    console.log(props.timetable);

    // const timeTable = (
    //     <table>
    //         {Object.entries(props.timetable).map( 
    //             ([day, time]) => (
    //                 <tr key={day}>
    //                     <td className={classes.Day}>{day}</td>
    //                     <td className={classes.Time}>{time}</td>
    //                 </tr>
    //             )
    //         )}
    //     </table>
    // );

    const currentDate = new Date();
    let currentDayIndex = currentDate.getDay();
    currentDayIndex == 0 ? currentDayIndex = 7 : currentDayIndex=currentDayIndex;
    const time = Object.values(props.timetable)[currentDayIndex-1];

    let btnText;
    
    function setRow () {
        if(props.location===undefined){
            btnText='Book Video Consultation'
            return(
                <tr className={classes.Center}>
                  <td className={classes.Light}>Use Phone/Laptop for Video Call</td>
                </tr>
            );
            
        }else{
            btnText = 'Book Appointment'
            return(
                <tr>
                    <td className={classes.Light}>Location: </td>
                    <td>{props.location}</td>
                </tr>

            );

        }
    }

    const table = (
        <table className={classes.Table}>
            
            {setRow()}

            <tr>
                <td className={classes.Light} >Fees:</td>
                <td>{props.fees}</td>
            </tr>

            <tr>
                <td className={classes.Light}>Today:</td>
                <td>{time}</td>
            </tr>
        </table>
    );
        
//   const see=()=>{
//     return(
//     <>
//     <Modal show={props.viewingTimetable} 
//                    modalClosed = {props.hideTimetableHandler}
//                 className={classes.Modal}  >

//                   {timeTable}

//             </Modal>
//     </>
//         );

  //}
    
    return (
        <Aux>
         
            
            
            <div className={classes.LocationSec}>
                
                <h1>{props.name}</h1>
                {table}  
                <p className={classes.OpenTimeTable} onClick={props.viewTimetableHandler} key={props.name} >View Whole Timetable</p>
                <Button text={btnText} className={classes.Button}  />   
                
    
            </div>

        </Aux>

    );
}

export default LocationSec;