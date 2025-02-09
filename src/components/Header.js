
import React from "react";
import blogData from "../data/blog";

function Header() {
    const info = blogData.name;
    return (
        <div>
        <header>
            <h1>{info}</h1>
        </header>
        </div>
    )
};

export default Header;