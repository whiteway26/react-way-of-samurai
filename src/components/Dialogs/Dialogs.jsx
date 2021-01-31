import { NavLink } from "react-router-dom";
import d from "./Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div className={`${d.person}`}>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={d.message}>{props.message}</div>;
};

const dialogsData = [
  { id: 0, name: "Akzhol" },
  { id: 1, name: "Ayaulim" },
  { id: 2, name: "Zhansaya" },
  { id: 3, name: "Mother" },
  { id: 4, name: "Rayimbek" },
  { id: 5, name: "Nurdaulet" },
];

const messagesData = [
  { id: 0, message: "Hi" },
  { id: 1, message: "How are you?" },
  { id: 2, message: "What's up bro?" },
];

const dialogs = dialogsData.map((d) => {
  return <Dialog name={d.name} id={d.id} />;
});

const messages = messagesData.map((m) => {
  return <Message message={m.message} />;
});

const Dialogs = (props) => {
  return (
    <section className={d.dialogs}>
      <div className={d.dialogPersons}>{dialogs}</div>
      <div className={d.dialogMessages}>{messages}</div>
    </section>
  );
};

export default Dialogs;
