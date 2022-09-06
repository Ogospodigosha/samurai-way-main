import React from "react";
import './Profile.module.css'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppPropsType, Obj} from "../../redux/state";


type profileType = {
    addPost: ()=>void
    updateNewPostText: (newText: string)=>void
    ProfileState: {
        posts: Array<Obj>
        newPostText: string
    }

}


export const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.ProfileState.posts}
                      newPostText={props.ProfileState.newPostText}
                     addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>)
}
