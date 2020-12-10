import './App.css';
import React from "react";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar state={props.state.sidebar}/>
      <div className='app-wrapper-content'>
        <Route path='/dialogItem' render={() =>
          <Dialogs
            dialogsPage={props.state.dialogsPage}
            addMessage={props.addMessage}
            updateNewMessage={props.updateNewMessage}
          />
        }/>
        <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                      newPostText={props.state.profilePage.newPostText}
                                                      addPost={props.addPost}
                                                      updateNewPostText = {props.updateNewPostText} />  }/>
        <Route path='/news' render={News}/>
        <Route path='/music' render={Music}/>
        <Route path='/settings' render={Settings}/>
      </div>
    </div>
  );
}

export default App;
