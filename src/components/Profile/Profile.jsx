import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import socialMedia from "../../assets/images/social-media.jpg";

function Profile() {
  return (
    <section>
      <img src={socialMedia} alt="profile" />
      <MyPosts />
    </section>
  );
}

export default Profile;
