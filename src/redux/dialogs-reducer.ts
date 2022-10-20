import {ActionsType} from "./redux-store";

type DialogPageType ={
    messagesData: Array<DialogType>
    newMessageBody: string
    dialogsData: Array<MessageType>
}
 export type DialogType = {
     id: number
     message: string
 }
 export type MessageType = {
     id: string
     name: string
 }
let initialState: DialogPageType = {
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
}
export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType)=> {
    debugger
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            debugger
            let body = state.newMessageBody;
            state.newMessageBody = ""
            state.messagesData.push({id: 5, message:body})
            return state
        default:
            return state
    }
}