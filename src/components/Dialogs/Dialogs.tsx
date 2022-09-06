import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogPageType} from "../../redux/state";



type dialogsType = {
    dialogsPage: DialogPageType
}

export const Dialogs = (props: dialogsType) => {
    let dialogsElements;
    let messagesElements;
    if (props.dialogsPage.dialogsData) {
        dialogsElements = props.dialogsPage.dialogsData.map(el=><DialogItem name ={el.name} id={el.id}  />  )
    }

    if (props.dialogsPage.messagesData) {
        messagesElements = props.dialogsPage.messagesData.map(el=><Message name={el.message}/>)
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

