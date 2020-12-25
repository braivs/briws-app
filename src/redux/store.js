import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

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
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)
    this._callSubscriber(this._state);

  }
}

window.store = store;
export default store;