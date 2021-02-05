// import MessageInputContainer from "./MessageInput/MessageInputContainer";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
// import d from "./Dialogs.module.css";

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
    <section>
      <div>{dialogElements}</div>
      <div>{messageElements}</div>
      <div>
        <form>
          <div>
            <textarea
              value={props.dialogsPage.newMessageBody}
              onChange={updateNewMessageBody}
            ></textarea>
            <button onClick={sendNewMessage}>Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Dialogs;
