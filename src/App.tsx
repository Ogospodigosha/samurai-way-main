import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import state, {addPost, updateNewPostText} from "./redux/state";

const App = () => {
    return (<BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route  path="/dialogs" render={()=><Dialogs dialogsPage={state.dialogsPage}/>}/>
                <Route  path="/profile" render={()=><Profile profilePage={state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText} />}/>
                <Route  path="/news" component={News}/>
                <Route  path="/music" component={Music}/>
                <Route  path="/settings" component={Settings}/>
            </div>
        </div>
    </BrowserRouter>);
}


export default App;
