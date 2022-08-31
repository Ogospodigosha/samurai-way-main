import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType ={
    name: string
    id: string
}
export const DialogItem =(props: DialogItemPropsType)=> {
    let path ="/dialogs/" + props.id
   return (<div className={classes.dialog}>
        <NavLink to={path}><img src="https://a.deviantart.net/avatars/b/l/blueoctober164.jpg?3"/> {props.name} </NavLink>
    </div>)
}

