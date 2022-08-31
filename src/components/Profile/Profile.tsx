import React from "react";
import './Profile.module.css'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppPropsType, Obj} from "../../redux/state";


type profileType = {
    addPost: (postMessage: string)=>void
    ProfileState: {
        posts: Array<Obj>
    }
}


export const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.ProfileState.posts} addPost={props.addPost}/>
        </div>)
}
