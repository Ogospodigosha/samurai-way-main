import React from 'react';
import './index.css';
import state, {DialogsObj, MessagesObj, Obj, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

 let rerenderEntireTree=(state: { profilePage: { posts: Obj[]; newPostText: string; }; dialogsPage: { messagesData: MessagesObj[]; dialogsData: DialogsObj[]; }; })=>{
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,document.getElementById('root')
    );
}


rerenderEntireTree(state)
subscribe(rerenderEntireTree)
