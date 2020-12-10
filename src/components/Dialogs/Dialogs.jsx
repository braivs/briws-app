import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messages = props.dialogsPage.messages.map(m => <Message author={m.author} message={m.message}/>);

  let newMessageElement = React.createRef();
  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewMessage(text);
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogs}
      </div>
      <div className={s.messages}>
        {messages}
      </div>
      <div className={s.newMessage}>
        <span>Author:</span>
        <textarea value={props.dialogsPage.newMessageAuthor}
        />
        <span>Message:</span>
        <textarea onChange={onMessageChange}
                  ref={newMessageElement}
                  value={props.dialogsPage.newMessageText}
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
}

export default Dialogs;