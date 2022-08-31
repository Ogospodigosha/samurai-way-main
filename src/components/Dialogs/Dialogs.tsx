import React from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {AppPropsType, DialogsObj, MessagesObj} from "../../redux/state";


type dialogsType = {
    dialogsState: {
        messagesData:Array<MessagesObj>
        dialogsData:Array<DialogsObj>
    }
}

export const Dialogs = (props: dialogsType) => {
    let dialogsElements;
    let messagesElements;
    if (props.dialogsState.dialogsData) {
        dialogsElements = props.dialogsState.dialogsData.map(el=><DialogItem name ={el.name} id={el.id}  />  )
    }

    if (props.dialogsState.messagesData) {
        messagesElements = props.dialogsState.messagesData.map(el=><Message name={el.message}/>)
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

