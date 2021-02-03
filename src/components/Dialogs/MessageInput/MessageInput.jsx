import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from "../../../redux/state";
import d from "../Dialogs.module.css";

const MessageInput = (props) => {
  const sendNewMessage = () => {
    props.dispatch(sendMessageCreator());
  };

  const updateNewMessageBody = (e) => {
    let body = e.target.value;
    props.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={d.dialogInput}>
      <textarea
        cols="100"
        rows="2"
        className={d.dialogInput__textarea}
        onChange={updateNewMessageBody}
        value={props.newMessageBody}
      ></textarea>
      <button className={d.dialogInput__btn} onClick={sendNewMessage}>
        Send
      </button>
    </div>
  );
};

export default MessageInput;
