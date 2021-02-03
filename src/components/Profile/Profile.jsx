import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import socialMedia from "../../assets/images/social-media.jpg";
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";

function Profile(props) {
  return (
    <section>
      <img src={socialMedia} alt="profile" />
      <ProfileInfo
        dispatch={props.dispatch}
        newPostText={props.profilePage.newPostText}
      />
      <MyPosts posts={props.profilePage.posts} />
    </section>
  );
}

export default Profile;
