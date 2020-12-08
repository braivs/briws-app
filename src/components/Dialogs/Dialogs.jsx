import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
  let dialogs = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messages = props.state.messages.map(m => <Message author={m.author} message={m.message}/>);

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
      <button onClick={addMessage}>Add message</button>
      <textarea ref={newMessageElement}/>
    </div>
  );
}

export default Dialogs;