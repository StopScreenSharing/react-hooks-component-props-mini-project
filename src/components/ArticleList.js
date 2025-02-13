import React from "react";
import blogData from "../data/blog";
import Article from "../components/Article"

function ArticleList() {
    const posts = blogData.posts
    const articlePost = posts.map((post) => {
        return <Article 
        key={post.id}
        title={post.title}
        date={post.date} 
        preview={post.preview} 
            />
    })

    return (
        <main>
            {articlePost}
        </main>
    )
}

export default ArticleList;