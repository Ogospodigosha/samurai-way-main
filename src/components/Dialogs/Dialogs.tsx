import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';
 export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + " " + classes.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Pasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Gosha</NavLink>
                </div>
            </div>
            <div className ={classes.messages}>
                <div className={classes.message}>Hi</div>
                <div className={classes.message}>How are you?</div>
                <div className={classes.message}>Yo</div>
            </div>
        </div>
    );
};

