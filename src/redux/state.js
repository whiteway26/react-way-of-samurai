const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hello, how are you?", likesCount: 12 },
        { id: 1, message: "It's me, you know?", likesCount: 11 },
      ],
      newPostText: "",
    },
    messagePage: {
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
      newMessage: "",
    },
  },
  _callSubscriber() {
    console.log("State was changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 2,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 3,
        message: this._state.messagePage.newMessage,
      };
      this._state.messagePage.messages.push(newMessage);
      this._callSubscriber(this._state);
      this._state.messagePage.newMessage = "";
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.messagePage.newMessage = action.newMessage;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;

export const addPostActionCreator = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  };
};

export const addMessageActionCreator = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageActionCreator = (message) => {
  return {
    type: UPDATE_NEW_MESSAGE,
    newMessage: message,
  };
};

export default store;
