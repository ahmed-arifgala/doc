import React from "react";
import DetailInfo from "./DetailInfo/DetailInfo";
import classes from './DetailInfoSec.module.css';

const DetailInfoSec = ({detailInfoQA}) => {
    return(
        <div className={classes.DetailInfoSec}>
        {
            detailInfoQA.map((item, index) => {
                return <DetailInfo key={index} detailInfo = {item} index={index}/>
            })
        }
        </div>
    );
}

export default DetailInfoSec;