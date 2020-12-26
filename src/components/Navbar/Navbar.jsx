import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
  return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/dialogItem" activeClassName={s.activeLink}>Dialogs</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
    </div>
    <div>
      <Friends friends={props.friends}/>
    </div>
  </nav>;
}

export default Navbar;