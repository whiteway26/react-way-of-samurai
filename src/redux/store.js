import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 0, message: "Hello, how are you?", likesCount: 12 },
        { id: 1, message: "It's me, you know?", likesCount: 11 },
      ],
      newPostText: "",
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        { id: 0, nickname: "Rayimwell" },
        { id: 1, nickname: "Whiteway" },
        { id: 2, nickname: "Zhansoka_mix" },
      ],
      newFriendNickname: "",
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
