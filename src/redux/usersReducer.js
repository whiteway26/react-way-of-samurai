// const FOLLOW = "FOLLOW";
// const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_FOLLOW = "TOGGLE_FOLLOW";

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case FOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userID) {
    //         return { ...u, isFollowed: true };
    //       }
    //       return u;
    //     }),
    //   };
    // case UNFOLLOW:
    //   return {
    //     ...state,
    //     users: state.users.map((u) => {
    //       if (u.id === action.userID) {
    //         return { ...u, isFollowed: false };
    //       }
    //       return u;
    //     }),
    //   };

    case TOGGLE_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, isFollowed: !u.isFollowed };
          }
          return u;
        }),
      };

    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

// export const followAC = (userID) => {
//   return {
//     type: FOLLOW,
//     userID: userID,
//   };
// };

// export const unfollowAC = (userID) => {
//   return {
//     type: UNFOLLOW,
//     userID: userID,
//   };
// };

export const toggleFollowAC = (userID) => {
  return {
    type: TOGGLE_FOLLOW,
    userID: userID,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
    users: users,
  };
};

export default usersReducer;
