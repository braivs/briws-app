import './index.css';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import state, {subscribe} from './redux/state'
import {addMessage, addPost, updateNewMessageAuthor, updateNewMessageText, updateNewPostText} from "./redux/state";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost = {addPost}
           updateNewPostText={updateNewPostText}
           addMessage = {addMessage}
           updateNewMessageText={updateNewMessageText}                                                          
           updateNewMessageAuthor={updateNewMessageAuthor}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderEntireTree(state);
subscribe(rerenderEntireTree);

