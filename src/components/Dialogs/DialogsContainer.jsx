import {
  addMessageActionCreator,
  updateNewMessageAuthorActionCreator,
  updateNewMessageTextActionCreator
} from "../../redux/dialog-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage

  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
    updateNewMessageAuthor: (author) => {
      dispatch(updateNewMessageAuthorActionCreator(author))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;