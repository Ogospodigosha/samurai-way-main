let  rerenderEntireTree =(state:RootStateType)=> {

}

// export type AppPropsType = {
//     posts?: Array<Obj>
//     dialogsData?: Array<DialogsObj>
//     messagesData?: Array<MessagesObj>
// }
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
    dialogsData: Array<MessageType>
}

export type RootStateType = {
    profilePage:ProfilePageType
    dialogsPage: DialogPageType
}

// export type stateType ={
//     updateNewPostText: (newText: string)=> void
//     addPost: ()=>void
//     state: {
//         profilePage: {
//             posts: Array<PostType>
//             newPostText: string
//         },
//         dialogsPage: {
//             messagesData:Array<MessageType>
//             dialogsData:Array<DialogType>
//         }
//     }
// }

let state: RootStateType = {
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
        dialogsData: [
            {id: "1", name: 'Gosha'},
            {id: "2", name: 'Misha'},
            {id: "3", name: 'Valera'},
            {id: "4", name: 'Olga'}
        ]
    }
}
export const addPost=()=>{
    let newPost:PostType = {id:5, message: state.profilePage.newPostText, likeskount:"0"}
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText ="";
    rerenderEntireTree(state);
}
export const updateNewPostText=(newText: string)=>{
    state.profilePage.newPostText = newText
    rerenderEntireTree(state);
}

export const subscribe = (observer:(state:RootStateType ) => void)=>{
rerenderEntireTree = observer;
}

export  default state