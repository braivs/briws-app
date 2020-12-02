import s from './Dialogs.module.css'
import React from "react";
import {NavLink} from "react-router-dom";

let DialogsData = [
  {id:1,name:'Kate'},
  {id:2,name:'Alisa'},
  {id:3,name:'Alex'},
  {id:4,name:'Genadiy'},
  {id:5,name:'Gosha'},
]
let MessagesData = [
  {id:1,message:'How are you?'},
  {id:2,message:'Hi'},
  {id:3,message:'Yo'},
  {id:4,message:'Go go go'},
  {id:5,message:'Cover me!'},
  {id:6,message:'Roger that!'}
]

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
        <DialogItem name={DialogsData[0].name} id={DialogsData[0].id}/>
        <DialogItem name={DialogsData[1].name} id={DialogsData[1].id}/>
        <DialogItem name={DialogsData[2].name} id={DialogsData[2].id}/>
        <DialogItem name={DialogsData[3].name} id={DialogsData[3].id}/>
        <DialogItem name={DialogsData[4].name} id={DialogsData[4].id}/>
      </div>
      <div className={s.messages}>
        <Message message={MessagesData[0].message}/>
        <Message message={MessagesData[1].message}/>
        <Message message={MessagesData[2].message}/>
        <Message message={MessagesData[3].message}/>
        <Message message={MessagesData[4].message}/>
        <Message message={MessagesData[5].message}/>

      </div>
    </div>
  );
}

export default Dialogs;