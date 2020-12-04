import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import DialogsData from "./DialogsData";
import MessagesData from "./MessagesData";

let dialogs = (props) => props.map( d => <DialogItem name={d.name} id={d.id}/>);
let messages = (props) => props.map (m => <Message message={m.message}/>);

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs(DialogsData)}
      </div>
      <div className={s.messages}>
        {messages(MessagesData)}
      </div>
    </div>
  );
}

export default Dialogs;