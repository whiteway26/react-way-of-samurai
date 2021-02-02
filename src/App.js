import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs
                  dialogs={props.state.messagePage.dialogs}
                  messages={props.state.messagePage.messages}
                />
              )}
            />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  posts={props.state.profilePage.posts}
                  addPost={props.addPost}
                  updateNewPostText={props.updateNewPostText}
                  newPostText={props.state.profilePage.newPostText}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
