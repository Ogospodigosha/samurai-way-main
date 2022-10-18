import React, { ChangeEvent } from 'react';
import classes from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import state, {DialogPageType, SendMessageAC, UpdateNewPostBodyAC} from "../../redux/state";
import store from "../../redux/state";



type dialogsType = {
    dialogsPage: DialogPageType
    newMessageBody: string
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
    let onSendMessageClick =()=>{
        store.dispatch(SendMessageAC())
    }
    let onNewMessageChange = (event: ChangeEvent<HTMLTextAreaElement>)=>{
       let body = event.currentTarget.value
        store.dispatch(UpdateNewPostBodyAC(body))
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>

                {dialogsElements}
            </div>
            <div className ={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={props.newMessageBody}
                                   placeholder={"enter your message"}
                                   onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

