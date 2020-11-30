import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts<br/>
      <textarea></textarea>
      <button>Add post</button>
      <div>
        <Post message="Hi, how are you?" likecount="2"/>
        <Post message="It`s my first message" likecount={"15"}/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
      </div>
    </div>
  );
}

export default MyPosts;