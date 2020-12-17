import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './redux/state'

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={store.getState()}
           addPost = {store.addPost.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}
           addMessage = {store.addMessage.bind(store)}
           updateNewMessageText={store.updateNewMessageText.bind(store)}
           updateNewMessageAuthor={store.updateNewMessageAuthor.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);

