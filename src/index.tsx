import React from 'react';
import './index.css';
import state, {RootStateType, subscribe} from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';

 let rerenderEntireTree=(state: RootStateType )=>{
    ReactDOM.render(
        <BrowserRouter>
            <App />
        </BrowserRouter>,document.getElementById('root')
    );
}


rerenderEntireTree(state)
subscribe(rerenderEntireTree)
