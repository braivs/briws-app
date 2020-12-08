import React from "react";
import s from './FriendItem.module.css'

const FriendItem = (props) => {
  return (
    <div className={s.friendItem}>
      <div><img className={s.ava} src="./ava.png" alt=""/></div>
      <div>{props.name}</div>
    </div>
  )
}

export default FriendItem;