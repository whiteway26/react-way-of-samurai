import { connect } from "react-redux";
import {
  // followAC,
  setUsersAC,
  toggleFollowAC,
  // unfollowAC,
} from "../../redux/usersReducer";
import Users from "./Users";

function mapStateToProps(state) {
  return {
    users: state.usersPage.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // follow: (userID) => dispatch(followAC(userID)),
    // unfollow: (userID) => dispatch(unfollowAC(userID)),
    toggleFollow: (userID) => dispatch(toggleFollowAC(userID)),
    setUsers: (users) => dispatch(setUsersAC(users)),
  };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
