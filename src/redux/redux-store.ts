import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {AddPostAC, SendMessageAC, UpdateNewPostAC, UpdateNewPostBodyAC} from "./store";
export type AppStoreType = ReturnType<typeof reducers>
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,

})
export type ActionsType = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostAC>
    | ReturnType<typeof UpdateNewPostBodyAC>| ReturnType<typeof SendMessageAC>
export let store = createStore(reducers)