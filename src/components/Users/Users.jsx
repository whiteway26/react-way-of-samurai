import React from "react";
import userStyles from "./Users.module.css";

const Users = (props) => {
  const users = [
    {
      id: 0,
      avatarUrl:
        "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      fullName: {
        firstName: "Akzhol",
        lastName: "Zhumagulov",
      },
      status: "I'm a front-end developer",
      location: {
        country: "Kazakhstan",
        city: "Almaty",
      },
      isFollowed: true,
    },
    {
      id: 1,
      avatarUrl:
        "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      fullName: {
        firstName: "Rayimbek",
        lastName: "Kumarbekov",
      },
      status: "I'm a database developer",
      location: {
        country: "Kazakhstan",
        city: "Nur-Sultan",
      },
      isFollowed: false,
    },
    {
      id: 2,
      avatarUrl:
        "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      fullName: {
        firstName: "Rakhatali",
        lastName: "Seilkhan",
      },
      status: "I'm a Java developer",
      location: {
        country: "Kazakhstan",
        city: "Almaty",
      },
      isFollowed: true,
    },
    {
      id: 3,
      avatarUrl:
        "https://thumbs.dreamstime.com/b/funny-cartoon-monster-face-vector-square-avatar-halloween-175916751.jpg",
      fullName: {
        firstName: "Yegeubayev",
        lastName: "Zhassulan",
      },
      status: "I'm a IOS developer",
      location: {
        country: "Kazakhstan",
        city: "ZhanaOzen",
      },
      isFollowed: false,
    },
  ];

  if (props.users.length === 0) {
    props.setUsers(users);
  }

  const userElements = props.users.map((u) => {
    return (
      <div key={u.id} className={userStyles.container}>
        <div>
          <img src={u.avatarUrl} alt="" className={userStyles.userAvatar} />
          {u.isFollowed ? (
            <button
              onClick={() => props.toggleFollow(u.id)}
              className={userStyles.btn}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => props.toggleFollow(u.id)}
              className={userStyles.btn}
            >
              Follow
            </button>
          )}
        </div>
        <div>
          <p>{`${u.fullName.firstName} ${u.fullName.lastName}`}</p>
          <p>{u.status}</p>
          <p>{u.location.country}</p>
          <p>{u.location.city}</p>
        </div>
      </div>
    );
  });

  return <section>{userElements}</section>;
};

export default Users;
