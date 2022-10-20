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
import {DialogPageType, ProfilePageType, StoreType} from "./redux/store";
import {ActionsType, AppStoreType, store} from "./redux/redux-store"
type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsType)=>void
}
 type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogPageType

}
const App = (props: AppPropsType) => {

    return (<BrowserRouter>
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className="app-wrapper-content">
                <Route  path="/dialogs" render={()=><Dialogs dialogsPage={props.state.dialogsPage} newMessageBody={props.state.dialogsPage.newMessageBody}/>}/>
                <Route  path="/profile" render={()=><Profile profilePage={props.state.profilePage}  dispatch={props.dispatch.bind(props.state)} />}/>
                <Route  path="/news" component={News}/>
                <Route  path="/music" component={Music}/>
                <Route  path="/settings" component={Settings}/>
            </div>
        </div>
    </BrowserRouter>);
}


export default App;
