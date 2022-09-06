
export type StoreType = {
    _state: RootStateType
    updateNewPostText:(newText: string)=> void
    addPost: ()=>void
    _rerenderEntireTree: (state:RootStateType)=> void
    subscribe: (observer:(state:RootStateType)=>void)=>void
    getState: ()=> RootStateType
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
            dialogsData: [
                {id: "1", name: 'Gosha'},
                {id: "2", name: 'Misha'},
                {id: "3", name: 'Valera'},
                {id: "4", name: 'Olga'}
            ]
        }
    },
    updateNewPostText(newText: string){
        this._state.profilePage.newPostText = newText
        this._rerenderEntireTree(this._state);
    },
    addPost(){
        let newPost:PostType = {id:5, message: this._state.profilePage.newPostText, likeskount:"0"}
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText ="";
        this._rerenderEntireTree(this._state);
    },
    _rerenderEntireTree(state:RootStateType){
        console.log("state changed")
    },
    subscribe(observer){
        this._rerenderEntireTree = observer;
    },
    getState() {
        return this._state
    }


}





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







export  default store