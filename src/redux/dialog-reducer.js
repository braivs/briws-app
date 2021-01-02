const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_AUTHOR = 'UPDATE-NEW-MESSAGE-AUTHOR';

let initialState = {
  dialogs: [
    {id: 1, name: 'Kate'},
    {id: 2, name: 'Alisa'},
    {id: 3, name: 'Alex'},
    {id: 4, name: 'Genadiy'},
    {id: 5, name: 'Gosha'},
    {id: 6, name: 'Karina'},
    {id: 7, name: 'BriWS'},
    {id: 8, name: 'Mario'}
  ],
  messages: [
    {id: 1, author: 'Alisa', message: 'How are you?'},
    {id: 2, author: 'BriWS', message: 'Hi'},
    {id: 3, author: 'Mario', message: 'Yo'},
    {id: 4, author: 'Gosha', message: 'Go go go'},
    {id: 5, author: 'Alex', message: 'Cover me!'},
    {id: 6, author: 'Alisa', message: 'Done!'}
  ],
  newMessageText: '',
  newMessageAuthor: ''
}

const dialogReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 7,
        author: state.newMessageAuthor,
        message: state.newMessageText,
      }
      let stateCopy = {...state}
      stateCopy.messages = [...state.messages]
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      stateCopy.newMessageAuthor = '';
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      let stateCopy = {...state}
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }
    case UPDATE_NEW_MESSAGE_AUTHOR: {
      let stateCopy = {...state}
      stateCopy.newMessageAuthor = action.newAuthor;
      return stateCopy;
    }
    default:
      return state
  }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export const updateNewMessageAuthorActionCreator = (author) => ({type: UPDATE_NEW_MESSAGE_AUTHOR, newAuthor: author})

export default dialogReducer;