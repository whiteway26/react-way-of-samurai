// import MessageInputContainer from "./MessageInput/MessageInputContainer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import d from "./Dialogs.module.css";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogElements = state.dialogs.map((d) => {
    return <Dialog id={d.id} name={d.name} />;
  });
  let messageElements = state.messages.map((m) => {
    return <Message message={m.message} />;
  });

  const sendNewMessage = (e) => {
    props.sendMessage();
    e.preventDefault();
  };

  const updateNewMessageBody = (e) => {
    let body = e.target.value;
    props.updateMessageBody(body);
  };

  return (
    <section className={d.container}>
      <div className={d.dialogs}>{dialogElements}</div>
      <div className={d.messages}>{messageElements}</div>
      <form className={d.form}>
        <textarea
          cols="45"
          value={props.dialogsPage.newMessageBody}
          onChange={updateNewMessageBody}
        ></textarea>
        <button onClick={sendNewMessage}>Send</button>
      </form>
    </section>
  );
};

export default Dialogs;
