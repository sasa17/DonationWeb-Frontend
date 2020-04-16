import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Navbar from "./Components/Navbar";
import SignupForm from "./Forms/SignupForm";
import LoginForm from "./Forms/LoginForm";
import Contact from "./Forms/ContactForm";
import Profile from "./Pages/Profile/index";
import Dashboard from "./Pages/Dashboard/index";
import Home from "./Pages/Home/home";

const App = () => {
  const getView = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
      </Switch>
    );
  };

  return (
    <div
      id="app"
      className="container-fluid row-fluid position-relative"
      style={{ backgroundColor: "snow" }}
    >
      <div className="row">
        <Navbar />
      </div>
      <div className="content row position-relative">{getView()}</div>
    </div>
  );
};

export default withRouter(observer(App));
