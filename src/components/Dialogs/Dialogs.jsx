import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
  addMessageActionCreator,
  updateNewMessageAuthorActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialog-reducer";

const Dialogs = (props) => {
  let state = props.store.getState().dialogsPage

  let dialogs = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
  let messages = state.messages.map(m => <Message author={m.author} message={m.message}/>);

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChangeText = (e) => {
    let text = e.target.value;
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }
  let onMessageChangeAuthor = (e) => {
    let author = e.target.value;
    props.store.dispatch(updateNewMessageAuthorActionCreator(author))
  }
  let newMessageAuthor = state.newMessageAuthor;
  let newMessageText = state.newMessageText;

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
                  value={newMessageAuthor}
                  placeholder='Enter author'
        />
        <span>Message:</span>
        <textarea onChange={onMessageChangeText}
                  value={newMessageText}
                  placeholder='Enter message'
        />
        <button onClick={addMessage}>Add message</button>
      </div>
    </div>
  );
}

export default Dialogs;