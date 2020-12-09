import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = (props) => {
  let posts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>);
  let newPostElement = React.createRef();
  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);

  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}/>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;