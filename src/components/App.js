import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";
import Article from "./Article";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header data={blogData} />
      <About image={blogData.image} about={blogData.about} />
      <ArticleList data={blogData} />

    </div>
  );
}

export default App;
