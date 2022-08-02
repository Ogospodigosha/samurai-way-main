import React from "react";
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    let posts = [
        {id:1, message: 'Hi. how are you?', likeskount:"0"},
        {id:2, message: 'Its my first post', likeskount:"23"}
    ]
    let postsElements = posts.map(el=><Post message={el.message} likeskount={el.likeskount}/>)
    return (
        <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>)
}