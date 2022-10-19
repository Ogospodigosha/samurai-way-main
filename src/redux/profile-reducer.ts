import {ActionsType, PostType, ProfilePageType} from "./state";

export const profileReducer = (state: ProfilePageType, action: ActionsType)=>{
    switch (action.type) {
        case "ADD-POST":
            let newPost:PostType = {id:5, message: state.newPostText, likeskount:"0"}
            state.posts.push(newPost)
            state.newPostText ="";
            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}