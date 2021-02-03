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
                  profilePage={props.state.profilePage}
                  dispatch={props.dispatch}
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
