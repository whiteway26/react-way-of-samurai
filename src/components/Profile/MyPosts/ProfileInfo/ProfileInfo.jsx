import React from "react";
import pi from "./ProfileInfo.module.css";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../../redux/state";

const ProfileInfo = (props) => {
  let postTextareaRef = React.createRef();

  let addPostText = (e) => {
    props.dispatch(addPostActionCreator());
    e.preventDefault();
  };

  let onPostChange = () => {
    let text = postTextareaRef.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
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
            placeholder="Enter a message"
            ref={postTextareaRef}
            value={props.newPostText}
            onChange={onPostChange}
          ></textarea>
        </div>
        <button className={pi.btn} onClick={addPostText}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ProfileInfo;
