import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType ={
    name: string
    id: string
}
const DialogItem =(props: DialogItemPropsType)=> {
    const path ="/dialogs/" + props.id
   return (<div className={classes.dialog + " " + classes.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>)
}

type MessagePropsType ={
    name: string
}
const Message =(props:MessagePropsType)=>{
    return <div className={classes.message}>{props.name}</div>
}

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
               <DialogItem name ="Gosha" id="1"/>
               <DialogItem name ="Misha" id="2"/>
               <DialogItem name ="Valera" id="3"/>
               <DialogItem name ="Olga" id="4"/>
            </div>
            <div className ={classes.messages}>
                <Message name="Hi"/>
                <Message name="Yo"/>
                <Message name="How are you?"/>
                <Message name="Im fine"/>
            </div>
        </div>
    );
};

