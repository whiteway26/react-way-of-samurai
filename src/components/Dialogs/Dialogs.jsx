import Dialog from "./Dialog/Dialog";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";
import MessageInput from "./MessageInput/MessageInput";

const Dialogs = (props) => {
  const dialogElements = props.dialogsPage.dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} />;
  });

  const messageElements = props.dialogsPage.messages.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <section className={d.dialogs}>
      <div className={d.dialogPersons}>{dialogElements}</div>
      <div className={d.dialogMessages}>{messageElements}</div>
      <MessageInput
        dispatch={props.dispatch}
        newMessageBody={props.dialogsPage.newMessageBody}
      />
    </section>
  );
};

export default Dialogs;
