import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        className={s.ava}
        src='./ava.png'
        alt=""/>
      <div>{props.message}</div>
      {props.likesCount}<span> likes</span>
    </div>
  );
}

export default Post;