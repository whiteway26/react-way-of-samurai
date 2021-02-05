const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";

let initialState = {
  dialogs: [
    { id: 0, name: "Akzhol" },
    { id: 1, name: "Ayaulim" },
    { id: 2, name: "Zhansaya" },
    { id: 3, name: "Mother" },
    { id: 4, name: "Rayimbek" },
    { id: 5, name: "Nurdaulet" },
  ],
  messages: [
    { id: 0, message: "Hi" },
    { id: 1, message: "How are you?" },
    { id: 2, message: "What's up bro?" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let newMessage = {
        id: 3,
        message: state.newMessageBody,
      };

      // let stateCopy = { ...state };
      // stateCopy.messages = { ...state.messages };
      // stateCopy.messages.push(newMessage);
      // stateCopy.newMessageBody = "";
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    case UPDATE_NEW_MESSAGE_BODY: {
      // let stateCopy = { ...state };
      // stateCopy.newMessageBody = action.body;
      return {
        ...state,
        newMessageBody: action.body,
      };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = () => {
  return {
    type: SEND_MESSAGE,
  };
};

export const updateNewMessageBodyActionCreator = (body) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
  };
};

export default dialogsReducer;
