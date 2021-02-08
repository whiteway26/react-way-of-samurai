import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import {
  sendMessageActionCreator,
  updateNewMessageBodyActionCreator,
} from "../../redux/dialogsReducer";

const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => dispatch(sendMessageActionCreator()),
    updateMessageBody: (body) =>
      dispatch(updateNewMessageBodyActionCreator(body)),
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
