import s from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

let DialogsData = [
  {id: 1, name: 'Kate'},
  {id: 2, name: 'Alisa'},
  {id: 3, name: 'Alex'},
  {id: 4, name: 'Genadiy'},
  {id: 5, name: 'Gosha'},
]


let MessagesData = [
  {id: 1, message: 'How are you?'},
  {id: 2, message: 'Hi'},
  {id: 3, message: 'Yo'},
  {id: 4, message: 'Go go go'},
  {id: 5, message: 'Cover me!'},
  {id: 6, message: 'Roger that!'}
]
const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div>
  );
};

let dialogs = DialogsData.map( d => <DialogItem name={d.name} id={d.id}/>);

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
};

let messages = MessagesData.map (m => <Message message={m.message}/>);

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
    </div>
  );
}

export default Dialogs;