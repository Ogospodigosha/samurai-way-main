import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';


type MessagePropsType ={
    name: string
}
export const Message =(props:MessagePropsType)=>{
    return <div className={classes.message}>{props.name}</div>
}

