import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let PostsData = [
  {id:1, message: 'Hi, how are you?', likesCount:3},
  {id:2, message: 'It`s my first message', likesCount:15},
  {id:3, message: 'Hoooo', likesCount:3},
  {id:4, message: 'Text', likesCount:4},
  {id:5, message: 'Hi hi', likesCount:1},
  {id:6, message: 'My', likesCount:3}
]

let posts = PostsData.map (p => <Post message={p.message} likesCount={p.likesCount}/>)

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
        {posts}
      </div>
    </div>
  );
}

export default MyPosts;