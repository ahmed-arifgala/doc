import React from "react";
import classes from './Home.module.css';
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <div className={classes.Home}>
            <h1>Home Page</h1>
            <Link to='/Doctor' > All Doctors </Link>
        </div>
    );
}

export default Home;