import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AppPropsType} from "../../index";


export const Dialogs = (props: AppPropsType) => {
    let dialogsElements;
    let messagesElements;
    if (props.dialogsData) {
        dialogsElements = props.dialogsData.map(el=><DialogItem name ={el.name} id={el.id}/> )
    }

    if (props.messagesData) {
        messagesElements = props.messagesData.map(el=><Message name={el.message}/>)
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className ={classes.messages}>
                {messagesElements}
            </div>
        </div>
    );
};

