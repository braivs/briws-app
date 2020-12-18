import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogs = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messages = props.dialogsPage.messages.map(m => <Message author={m.author} message={m.message}/>);

  let newMessageText = React.createRef();
  let newMessageAuthor = React.createRef();
  let addMessage = () => {
    props.dispatch({type: 'ADD-MESSAGE'});
  }

  let onMessageChangeText = () => {
    let text = newMessageText.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newText: text});
  }
  let onMessageChangeAuthor = () => {
    let author = newMessageAuthor.current.value;
    props.dispatch({type: 'UPDATE-NEW-MESSAGE-AUTHOR', newAuthor: author})
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
        <textarea onChange={onMessageChangeAuthor}
                  ref={newMessageAuthor}
                  value={props.dialogsPage.newMessageAuthor}
        />
        <span>Message:</span>
        <textarea onChange={onMessageChangeText}
                  ref={newMessageText}
                  value={props.dialogsPage.newMessageText}
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
}

export default Dialogs;