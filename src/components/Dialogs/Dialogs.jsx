import s from './Dialogs.module.css'
import React from "react";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Dmitry</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog + " " + s.active}>Sveta</div>
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