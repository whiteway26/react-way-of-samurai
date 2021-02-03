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
  // addPost() {
  //   let newPost = {
  //     id: 2,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //   };

  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.profilePage.newPostText = newText;
  //   this._callSubscriber(this._state);
  // },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 2,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
