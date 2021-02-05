const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 0, message: "Hello, how are you?", likesCount: 12 },
    { id: 1, message: "It's me, you know?", likesCount: 11 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 2,
        message: state.newPostText,
        likesCount: 0,
      };

      // stateCopy = { ...state };
      // stateCopy.posts = { ...state.posts };

      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = "";
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      // stateCopy = { ...state };
      // stateCopy.newPostText = action.newText;
      return {
        ...state,
        newPostText: action.newText,
      };
    default:
      return state;
  }
};

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

export default profileReducer;
