import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";


export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost = {addPost}
           updateNewPostText={updateNewPostText}
           addMessage = {addMessage}
           updateNewMessage={updateNewMessage}/>

    </BrowserRouter>,
    document.getElementById('root')
  );
}