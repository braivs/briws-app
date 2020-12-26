import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageAuthorActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContex";

const DialogsContainer = (props) => {
  return <StoreContext.Consumer>
    {
      (store) => {
        let state = store.getState().dialogsPage
        let addMessageClick = () => {
          store.dispatch(addMessageActionCreator());
        }
        let onMessageChangeText = (text) => {
          store.dispatch(updateNewMessageTextActionCreator(text));
        }
        let onMessageChangeAuthor = (author) => {
          store.dispatch(updateNewMessageAuthorActionCreator(author))
        }
        return <Dialogs
          updateNewMessageText={onMessageChangeText}
          updateNewMessageAuthor={onMessageChangeAuthor}
          addMessage={addMessageClick}
          dialogsPage={state}
        />
      }
    }
  </StoreContext.Consumer>
}

export default DialogsContainer;