import Post from "./Post/Post";
import mp from "./MyPosts.module.css";

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
    <section className={mp.container}>
      <h2>My Posts</h2>
      <form>
        <textarea
          onChange={updateNewPostText}
          value={props.newPostText}
          cols="50"
          rows="5"
        ></textarea>
        <button onClick={addNewPost}>Add</button>
      </form>
      <div className={mp.posts}>{postElements}</div>
    </section>
  );
};

export default MyPosts;
