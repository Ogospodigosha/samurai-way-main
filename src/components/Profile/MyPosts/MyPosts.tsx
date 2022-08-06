import React from "react";
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {AppPropsType} from "../../../index";

export const MyPosts = (props: AppPropsType) => {
    let postsElements;
    if (props.posts) {
        postsElements = props.posts.map(el => <Post message={el.message} likeskount={el.likeskount}/>)
    }

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