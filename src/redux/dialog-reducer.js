const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_AUTHOR = 'UPDATE-NEW-MESSAGE-AUTHOR';

const dialogReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 7,
        author: state.newMessageAuthor,
        message: state.newMessageText,
      }
      state.messages.push(newMessage);
      state.newMessageText = '';
      state.newMessageAuthor = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case UPDATE_NEW_MESSAGE_AUTHOR:
      state.newMessageAuthor = action.newAuthor;
      return state;
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export const updateNewMessageAuthorActionCreator = (author) => ({type: UPDATE_NEW_MESSAGE_AUTHOR, newAuthor: author})

export default dialogReducer;