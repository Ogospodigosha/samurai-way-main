import React from "react";
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionsType, AddPostAC, PostType, UpdateNewPostAC} from "../../../redux/store";

type MyPostsType = {
    posts: Array<PostType>
    newPostText: string
    dispatch: (action: ActionsType)=> void
}

export const MyPosts = (props: MyPostsType) => {
    let postsElements;
    if (props.posts) {
        postsElements = props.posts.map(el => <Post message={el.message} likeskount={el.likeskount}/>)
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const AddPost=()=>{
                props.dispatch(AddPostAC(props.newPostText));
    }
    let onPostChange =()=>{
        debugger
        let text = newPostElement.current?.value
        if (text || text === "") {
            props.dispatch(UpdateNewPostAC(text))

        }

    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value ={props.newPostText}/>
                </div>
                <div>
                    <button onClick={AddPost}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
}