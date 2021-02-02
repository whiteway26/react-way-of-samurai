import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import socialMedia from "../../assets/images/social-media.jpg";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <section>
      <img src={socialMedia} alt="profile" />
      <ProfileInfo
        addPost={props.addPost}
        updateNewPostText={props.updateNewPostText}
        newPostText={props.newPostText}
      />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </section>
  );
}

export default Profile;
