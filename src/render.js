import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessageAuthor, updateNewMessageText, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
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