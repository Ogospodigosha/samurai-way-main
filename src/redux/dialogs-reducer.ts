import {ActionsType, DialogPageType} from "./state";

export const dialogsReducer = (state: DialogPageType, action: ActionsType)=> {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = ""
            state.messagesData.push({id: 5, message: body})
            return state
        default:
            return state
    }
}