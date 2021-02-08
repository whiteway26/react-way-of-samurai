import d from "../Dialogs.module.css";

const Message = (props) => {
  return (
    <div className={d.message}>
      <span>{props.message}</span>
    </div>
  );
};

export default Message;
