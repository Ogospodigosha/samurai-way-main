import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let posts = [
    {id: 1, message: 'Hi. how are you?', likeskount: "0"},
    {id: 2, message: 'Its my first post', likeskount: "23"}
]
let dialogsData = [
    {id: "1", name: 'Gosha'},
    {id: "2", name: 'Misha'},
    {id: "3", name: 'Valera'},
    {id: "4", name: 'Olga'}
]
let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'How are you?'},
    {id: 4, message: 'Im fine'}
]
export type AppPropsType = {
    posts?: Array<Obj>
    dialogsData?: Array<DialogsObj>
    messagesData?: Array<MessagesObj>
}
type Obj = {
    id: number
    message: string
    likeskount: string
}
type DialogsObj = {
    id: string
    name: string
}
type MessagesObj = {
    id: number
    message: string
}
ReactDOM.render(
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>,
    document.getElementById('root')
);