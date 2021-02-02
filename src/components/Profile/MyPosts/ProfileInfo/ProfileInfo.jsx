import React from "react";
import pi from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  let textareaRef = React.createRef();

  let addPostText = (e) => {
    props.addPost();
    textareaRef.current.value = "";
    e.preventDefault();
  };

  let onPostChange = () => {
    let text = textareaRef.current.value;
    props.updateNewPostText(text);
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
            ref={textareaRef}
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
