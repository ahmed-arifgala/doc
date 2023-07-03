import React, { useContext, useEffect } from "react";
import LocationSec from "./LocationSec/LocationSec";
import classes from './RightSideSec.module.css';
import context from "../../../../Context/Context";
import Aux from "../../../../hoc/Auxiliary/Auxiliary";
import Modal from "../../../../UI/Modal/Modal";

const RightSideSec = () => {
    const { locations, viewTimetableHandler, hideTimetableHandler} = useContext(context);
    const locKeys = Object.keys(locations);

    console.log(locations.viewingTimetable);
    var timeTable;

    const genTable = (l)=>{
        console.log('l', l)
        timeTable = (
            <table>
                {Object.entries(l).map( 
                    ([day, time]) => (
                        <tr key={day}>
                            <td className={classes.Day}>{day}</td>
                            <td className={classes.Time}>{time}</td>
                        </tr>
                    )
                )}
            </table>
        );
        console.log(timeTable)
    }

    useEffect(()=>{
        console.log(timeTable);
    },)

    const gen = () => {
        console.log('INSIDE GEN!');
        return(
            <Modal show={true} 
            modalClosed = {locations.hideTimetableHandler}
            className={classes.Modal}>
                   {console.log('INSIDE MODAL CALL!')} 
                    
                    {timeTable}

            </Modal>
        );
    }

    return (
        <Aux>
            
            {gen()};

             <div className={classes.RightSideWrapper}>
              <div className={classes.RightSideSec}>
                {
                    locKeys.slice(0,-1).map((key) => {
                        return (
                            locations[key].map((loc) => {
                                genTable(loc.timetable);
                                return <LocationSec name={loc.name} 
                                                    location={loc.location} 
                                                    fees={loc.fees} 
                                                    timetable={loc.timetable} 
                                                    viewingTimetable={locations.viewingTimetable}
                                                    viewTimetableHandler = {viewTimetableHandler}
                                                    hideTimetableHandler={hideTimetableHandler} 
                                        />  
                            })
                        )
                    })
                }
             </div>
        </div>
        </Aux>

      
    );
}

export default RightSideSec;