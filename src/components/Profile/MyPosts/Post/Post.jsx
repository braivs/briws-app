import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://www.denofgeek.com/wp-content/uploads/2020/04/Avatar-The-Last-Airbender-Netflix.png"
        alt=""/>
      <div>{props.message}</div>
      {props.likesCount}<span> likes</span>
    </div>
  );
}

export default Post;