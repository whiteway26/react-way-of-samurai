import { NavLink } from "react-router-dom";
// import d from "../../Dialogs/Dialogs.module.css";

const Dialog = (props) => {
  return (
    <div>
      <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
