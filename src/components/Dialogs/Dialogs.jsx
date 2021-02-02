import Dialog from "./Dialog/Dialog";
import d from "./Dialogs.module.css";
import Message from "./Message/Message";

const Dialogs = (props) => {
  const dialogElements = props.dialogs.map((d) => {
    return <Dialog name={d.name} id={d.id} />;
  });

  const messageElements = props.messages.map((m) => {
    return <Message message={m.message} />;
  });

  return (
    <section className={d.dialogs}>
      <div className={d.dialogPersons}>{dialogElements}</div>
      <div className={d.dialogMessages}>{messageElements}</div>
    </section>
  );
};

export default Dialogs;
