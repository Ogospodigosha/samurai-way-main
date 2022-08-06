import React from "react";
import './Profile.module.css'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {AppPropsType} from "../../index";

export const Profile = (props: AppPropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts = {props.posts}/>
        </div>)
}