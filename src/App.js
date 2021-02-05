import { Route, Switch } from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Switch>
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
