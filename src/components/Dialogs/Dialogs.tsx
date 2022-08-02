import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom';

type DialogItemPropsType ={
    name: string
    id: string
}
const DialogItem =(props: DialogItemPropsType)=> {
    let path ="/dialogs/" + props.id
   return (<div className={classes.dialog}>
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
    let dialogsData = [
        {id:"1", name: 'Gosha'},
        {id:"2", name: 'Misha'},
        {id:"3", name: 'Valera'},
        {id:"4", name: 'Olga'}
    ]
    let messagesData = [
        {id:1, message: 'Hi'},
        {id:2, message: 'Yo'},
        {id:3, message: 'How are you?'},
        {id:4, message: 'Im fine'}
    ]
    let dialogsElements = dialogsData.map(el=><DialogItem name ={el.name} id={el.id}/> )
    let messagesElements = messagesData.map(el=><Message name={el.message}/>)
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

