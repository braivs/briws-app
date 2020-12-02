import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

let PostsData = [
  {id:1, message: 'Hi, how are you?', likesCount:3},
  {id:2, message: 'It`s my first message', likesCount:15},
  {id:3, message: 'Hoooo', likesCount:3},
  {id:4, message: 'Text', likesCount:4},
  {id:5, message: 'Hi hi', likesCount:1},
  {id:6, message: 'My', likesCount:2}
]

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
        <Post message={PostsData[0].message} likesCount={PostsData[0].likesCount}/>
        <Post message={PostsData[1].message} likesCount={PostsData[1].likesCount}/>
        <Post message={PostsData[2].message} likesCount={PostsData[2].likesCount}/>
        <Post message={PostsData[3].message} likesCount={PostsData[3].likesCount}/>
        <Post message={PostsData[4].message} likesCount={PostsData[4].likesCount}/>
        <Post message={PostsData[5].message} likesCount={PostsData[5].likesCount}/>
      </div>
    </div>
  );
}

export default MyPosts;