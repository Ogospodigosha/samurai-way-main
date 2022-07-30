import React from "react";
import './MyPosts.module.css'
import classes from './MyPosts.module.css'
import {Post} from "./Post/Post";
export const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Add Post</button>
                </div>
                <div className={classes.posts}>
                    <Post message ={"Hi. how are you?"}/>
                    <Post message ={"Its my first post"}/>
                </div>
            </div>)
}