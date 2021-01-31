import React from "react";
import mp from "./MyPosts.module.css";
import Post from "./Post/Post";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const postsData = [
  { id: 0, message: "Hello, how are you?", likesCount: 12 },
  { id: 1, message: "It's me, you know?", likesCount: 11 },
];

const posts = postsData.map((p) => {
  return <Post message={p.message} likesCount={p.likesCount} />;
});

function MyPosts() {
  return (
    <div className={mp.container}>
      <ProfileInfo />
      {posts}
    </div>
  );
}

export default MyPosts;
