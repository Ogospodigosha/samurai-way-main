import React from 'react';
import classes from './ProfileInfo.module.css';

export const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"/>
            </div>
            <div className ={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
};

