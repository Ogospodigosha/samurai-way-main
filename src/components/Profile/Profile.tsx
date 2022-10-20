import React from "react";
import './Profile.module.css'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

import {ActionsType} from "../../redux/redux-store";
import {ProfilePageType} from "../../redux/profile-reducer";



type profileType = {

    dispatch: (action: ActionsType)=> void
    profilePage:ProfilePageType

}


export const Profile = (props: profileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     dispatch={props.dispatch}
            />
        </div>)
}

