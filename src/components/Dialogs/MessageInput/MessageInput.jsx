import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../../redux/state";
import d from "../Dialogs.module.css";

const MessageInput = (props) => {
  let msgTextareaRef = React.createRef();

  const addMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  const onMsgChange = () => {
    let text = msgTextareaRef.current.value;
    props.dispatch(updateNewMessageActionCreator(text));
  };

  return (
    <div className={d.dialogInput}>
      <textarea
        cols="100"
        rows="2"
        className={d.dialogInput__textarea}
        ref={msgTextareaRef}
        onChange={onMsgChange}
        value={props.newMessage}
      ></textarea>
      <button className={d.dialogInput__btn} onClick={addMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
