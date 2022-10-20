import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {sidebarReducer} from "./sidebar-reducer";

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state:RootStateType)=> void
    subscribe: (observer:(state:RootStateType)=>void)=>void
    getState: ()=> RootStateType
    dispatch: (action: ActionsType)=> void

}


export type ActionsType = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdateNewPostAC>
    | ReturnType<typeof UpdateNewPostBodyAC>| ReturnType<typeof SendMessageAC>

export const AddPostAC =(newPostText: string)=>{
    return {type:"ADD-POST", newPostText: newPostText} as const
}
export const UpdateNewPostAC =(newText: string)=>{
   return {type:"UPDATE-NEW-POST-TEXT", newText: newText } as const
}
export const UpdateNewPostBodyAC =(body: string)=>{
    return {type: "UPDATE-NEW-MESSAGE-BODY", body } as const
}
export const SendMessageAC =()=>{
    return {type: "SEND-MESSAGE" } as const
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi. how are you?', likeskount: "0"},
                {id: 2, message: 'Its my first post', likeskount: "23"}
            ],
            newPostText: ""
        },
        dialogsPage: {
            messagesData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Yo'},
                {id: 3, message: 'How are you?'},
                {id: 4, message: 'Im fine'}
            ],
            newMessageBody: "",
            dialogsData: [
                {id: "1", name: 'Gosha'},
                {id: "2", name: 'Misha'},
                {id: "3", name: 'Valera'},
                {id: "4", name: 'Olga'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber(state:RootStateType){
        console.log("state changed")
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsType) {
        this._state.profilePage =  profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action )
        this._state.sidebar = sidebarReducer(this._state.sidebar, {})
        this._callSubscriber(this._state)

    }

}


// @ts-ignore
window.store = store


export type PostType = {
    id: number
    message: string
    likeskount: string
}
export type DialogType = {
    id: number
    message: string
}
export type MessageType = {
    id: string
    name: string
}
export type ProfilePageType ={
    posts:Array<PostType>
    newPostText: string
}
export type DialogPageType ={
    messagesData: Array<DialogType>
    newMessageBody: string
    dialogsData: Array<MessageType>
}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogPageType
    sidebar: {  }
}







export  default store