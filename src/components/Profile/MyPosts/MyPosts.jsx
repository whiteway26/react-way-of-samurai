import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
  const postElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  return <div className={mp.container}>{postElements}</div>;
}

export default MyPosts;
