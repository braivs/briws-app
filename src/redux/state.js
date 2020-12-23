const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const UPDATE_NEW_MESSAGE_AUTHOR = 'UPDATE-NEW-MESSAGE-AUTHOR';

let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 3},
        {id: 2, message: 'It`s my first message', likesCount: 15},
        {id: 3, message: 'Hoooo', likesCount: 3},
      ],
      newPostText: 'CyberShaman'
    },
    dialogsPage: {
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
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
      ],
    },

  },
  _callSubscriber() {
    console.log('state changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 8,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: 7,
        author: this._state.dialogsPage.newMessageAuthor,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.newMessageAuthor = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_AUTHOR) {
      this._state.dialogsPage.newMessageAuthor = action.newAuthor;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})
export const updateNewMessageAuthorActionCreator = (author) => ({type: UPDATE_NEW_MESSAGE_AUTHOR, newAuthor: author})

window.store = store;
export default store;