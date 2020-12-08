import React from "react";
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {
  // debugger;
  let friends = props.friends.map(d => <FriendItem name={d.name}/>);
  return (
    <div className>
      <h1>Friends</h1>
      <div className={s.friendsContainer}>
        {friends}
      </div>
    </div>
  );
};

export default Friends;