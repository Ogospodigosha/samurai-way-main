import React from 'react';
import './index.css';
import {store} from "./redux/redux-store";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import {AppStoreType} from "./redux/redux-store";
import {RootStateType} from "./redux/store";

 let rerenderEntireTree=(state:AppStoreType)=>{
    ReactDOM.render(
        <BrowserRouter>
            <App dispatch = {store.dispatch.bind(store)}  state={state}/>
        </BrowserRouter>,document.getElementById('root')
    );
}


rerenderEntireTree(store.getState())
store.subscribe(()=> {
    rerenderEntireTree(store.getState())
})
