import React from "react";
import p from "./Post.module.css";
import avatarImg from "../../../../assets/images/avatar.png";

function Post(props) {
  return (
    <div className={p.post}>
      <img src={avatarImg} />
      <p>{props.message}</p>
      <p>like {props.likesCount}</p>
    </div>
  );
}

export default Post;
