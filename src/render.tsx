import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {addPost, DialogsObj, MessagesObj, Obj, stateType} from './redux/state';
import AppPropsType from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree=(state:{profilePage: {posts: Obj[]}, dialogsPage: {messagesData: MessagesObj[], dialogsData: DialogsObj[]}})=>{
    ReactDOM.render(
        <BrowserRouter>
        <App state={state} addPost={addPost}/>
        </BrowserRouter>,document.getElementById('root')
    );
}
//