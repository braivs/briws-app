import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageAuthorActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage

  let addMessageClick = () => {
    props.store.dispatch(addMessageActionCreator());
  }

  let onMessageChangeText = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreator(text));
  }
  let onMessageChangeAuthor = (author) => {
    props.store.dispatch(updateNewMessageAuthorActionCreator(author))
  }

  return <Dialogs
    updateNewMessageText={onMessageChangeText}
    updateNewMessageAuthor={onMessageChangeAuthor}
    addMessage={addMessageClick}
    dialogsPage={state}
  />
}

export default DialogsContainer;