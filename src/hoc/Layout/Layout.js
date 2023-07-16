import React from "react";
import Toolbar from "../../Navigation/Toolbar/Toolbar";
import classes from './Layout.module.css';
import {Outlet} from 'react-router-dom';

const Layout = () => {
    return (
            <>
                <Toolbar />
                <div className={classes.Outlet}>
                    <Outlet /> 
                </div>
                 

            </>
        );
}

export default Layout;