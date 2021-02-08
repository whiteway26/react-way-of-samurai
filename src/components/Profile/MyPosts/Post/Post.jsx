import React from "react";
import p from "./Post.module.css";
import avatarImg from "../../../../assets/images/avatar.png";

function Post(props) {
  return (
    <div className={p.post}>
      <img src={avatarImg} alt="avatar" />
      <div className={p.text}>
        <p>{props.message}</p>
        <p>like {props.likesCount}</p>
      </div>
    </div>
  );
}

export default Post;
