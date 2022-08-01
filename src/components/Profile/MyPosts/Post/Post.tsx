import React from "react";
import './Post.module.css'
import classes from './Post.module.css'

type PostPropsType = {
    message: string
}
export const Post = (props: PostPropsType) => {
    return (
                    <div className={classes.item}>
                       <img src="https://cdn.w600.comps.canstockphoto.ru/profile-%D1%8D%D0%BC%D0%BE%D1%86%D0%B8%D1%8F-%D0%BC%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9-%D0%BB%D0%B8%D1%86%D0%BE-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F_csp48175026.jpg"/>
                        {props.message}
                        <div>Like</div>
                    </div>)
}