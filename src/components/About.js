import React from "react";
import blogData from "../data/blog";

function About({image="https://via.placeholder.com/215", }) {
    const aboutAuthor = blogData.about
    const pfp = blogData.image
    return (
        
        <aside>
            <img src={pfp} alt="blog logo" />
            <p>{aboutAuthor}</p>
        </aside>
    )
};

export default About;