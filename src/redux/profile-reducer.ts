import {ActionsType} from "./redux-store";
export type ProfilePageType ={
    posts:Array<PostType>
    newPostText: string
}
export type PostType = {
    id: number
    message: string
    likeskount: string
}
let initialState = {
    posts: [
        {id: 1, message: 'Hi. how are you?', likeskount: "0"},
        {id: 2, message: 'Its my first post', likeskount: "23"}
    ],
    newPostText: ""
}
export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType)=>{
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