import React from "react";
import s from './Message.module.css'

const Message = (props) => {
  return (
    <div className={s.message}>
      <div className={s.left}>
        <img className={s.ava} src="./ava.png" alt=""/>
      </div>
      <div className={s.right}>
        <div className={s.author}>{props.author}</div>
        <div>{props.message}</div>
      </div>
    </div>
  );
};

export default Message;