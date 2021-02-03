import React from "react";
import pi from "./ProfileInfo.module.css";
import {
  addPostCreator,
  updateNewPostTextCreator,
} from "../../../../redux/state";

const ProfileInfo = (props) => {
  let addNewPost = (e) => {
    props.dispatch(addPostCreator());
    e.preventDefault();
  };

  let updateNewPostText = (e) => {
    let text = e.target.value;
    props.dispatch(updateNewPostTextCreator(text));
  };

  return (
    <div>
      <form>
        <div>
          <textarea
            name="message"
            id="msg"
            cols="50"
            rows="10"
            value={props.newPostText}
            onChange={updateNewPostText}
          ></textarea>
        </div>
        <button className={pi.btn} onClick={addNewPost}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ProfileInfo;
