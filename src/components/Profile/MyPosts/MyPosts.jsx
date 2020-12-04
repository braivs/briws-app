import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import PostsData from "./PostsData";


let posts = (props) => props.map (p => <Post message={p.message} likesCount={p.likesCount}/>);

const MyPosts = () => {
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <textarea/>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {posts(PostsData)}
      </div>
    </div>
  );
}

export default MyPosts;