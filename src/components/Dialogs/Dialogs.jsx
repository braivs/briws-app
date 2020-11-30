import s from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}><NavLink to='/dialogs/1'>Andrey</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/2'>Dmitry</NavLink></div>
        <div className={s.dialog}><NavLink to='/dialogs/3'>Sasha</NavLink></div>
        <div className={s.dialog + " " + s.active}><NavLink to='/dialogs/4'>Sveta</NavLink></div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you?</div>
        <div className={s.message}>I`m ok</div>
        <div className={s.message}>Ku!</div>
      </div>
    </div>
  );
}

export default Dialogs;