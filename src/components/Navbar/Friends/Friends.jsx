import React from "react";
import s from './Friends.module.css';
import FriendItem from './FriendItem/FriendItem'

const Friends = (props) => {
  let friends = props.friends.map(d => <FriendItem key={d.id} name={d.name}/>);
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