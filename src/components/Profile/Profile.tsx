import React from "react";
import './Profile.module.css'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>)
}