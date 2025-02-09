import React from "react";
import blogData from "../data/blog";

function Article({date = "January 1, 1970"}) {
    const title = blogData.posts.title
    const date = blogData.posts.date
    const preview = blogData.posts.preview
    
    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;