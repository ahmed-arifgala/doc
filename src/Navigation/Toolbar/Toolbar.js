import React from "react";
import classes from './Toolbar.module.css';
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
    return (
        <header className={classes.Toolbar}>
            <nav>
            {/* <svg width="40" height="15" viewBox="0 0 40 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 9L0 0l16.182 13.35a6 6 0 0 0 7.636 0L40 0 20 9z" fill="#fff"></path></svg>
                 */}
                <NavigationItems />
            </nav>

        </header>

        );
}


export default Toolbar;