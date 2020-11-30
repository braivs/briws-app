import s from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog}><NavLink to={path}>{props.name}</NavLink></div>
  );
};

const Message = (props) => {
  return <div className={s.message}>{props.message}</div>
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {/*<div className={s.dialog}><NavLink to='/dialogs/1'>Andrey</NavLink></div>*/}
        <DialogItem name='Andrey' id='1'/>
        <DialogItem name='Dmitry' id='2'/>
        <DialogItem name='Sasha' id='3'/>
        <DialogItem name='Sveta' id='4'/>
        <DialogItem name='Alisa' id='5'/>
      </div>
      <div className={s.messages}>
        <Message message='How are you?'/>
        <Message message='Hi'/>
        <Message message='Yo'/>
        <Message message='Go go go'/>
        <Message message='Cover me!'/>
        <Message message='Roger that!'/>
      </div>
    </div>
  );
}

export default Dialogs;