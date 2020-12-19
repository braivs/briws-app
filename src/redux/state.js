const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
      newMessageText: 'defaultMessage',
      newMessageAuthor: 'defaultAuthor'
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
    } else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 7,
        author: this._state.dialogsPage.newMessageAuthor,
        message: this._state.dialogsPage.newMessageText,
      }
      this._state.dialogsPage.messages.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.newMessageAuthor = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-MESSAGE-AUTHOR') {
      this._state.dialogsPage.newMessageAuthor = action.newAuthor;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

window.store = store;
export default store;