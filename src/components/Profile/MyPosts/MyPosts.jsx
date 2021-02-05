import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((p) => {
    return <Post message={p.message} likesCount={p.likesCount} />;
  });

  const addNewPost = (e) => {
    props.addPost();
    e.preventDefault();
  };

  const updateNewPostText = (e) => {
    let text = e.target.value;
    props.updatePostText(text);
  };

  return (
    <div>
      <h3>My Posts</h3>
      <form>
        <div>
          <textarea
            onChange={updateNewPostText}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addNewPost}>Add</button>
        </div>
      </form>
      <div>{postElements}</div>
    </div>
  );
};

export default MyPosts;
