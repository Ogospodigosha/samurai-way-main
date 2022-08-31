import React from "react";
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AppPropsType, Obj} from "../../../redux/state";

type MyPostsType = {
    posts: Array<Obj>
    addPost: (postMessage: string)=>void
}

export const MyPosts = (props: MyPostsType) => {
    let postsElements;
    if (props.posts) {
        postsElements = props.posts.map(el => <Post message={el.message} likeskount={el.likeskount}/>)
    }
    let newPostElement = React.createRef<HTMLTextAreaElement>();
    const AddPost=()=>{
            let text = newPostElement.current?.value;
            if (text) {
                props.addPost(text);
            }
    }
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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