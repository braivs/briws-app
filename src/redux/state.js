import {rerenderEntireTree} from "../render";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 3},
      {id: 2, message: 'It`s my first message', likesCount: 15},
      {id: 3, message: 'Hoooo', likesCount: 3},
      {id: 4, message: 'Text', likesCount: 4},
      {id: 5, message: 'Hi hi', likesCount: 1},
      {id: 6, message: 'My', likesCount: 3},
      {id: 7, message: 'Done it again 27!!!!!', likesCount: 1000}
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

}

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 8,
    message: state.profilePage.newPostText,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let addMessage = () => {
  let newMessage = {
    id: 7,
    author: state.dialogsPage.newMessageAuthor,
    message: state.dialogsPage.newMessageText,
  }
  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  state.dialogsPage.newMessageAuthor = 'defaultAuthor';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
}

export let updateNewMessage = (newText) => {
  state.dialogsPage.newMessageAuthor = 'defaultAuthor';
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree(state);
}

export default state;