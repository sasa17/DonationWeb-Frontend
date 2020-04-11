import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Navbar from "./Navbar";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

// import authStore from "./stores/authStore";

const App = () => {
  const getView = () => {
    return (
      <Switch>
        <Redirect exact from="/" to="/login" />
        <Route path="/signup" component={SignupForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    );
  };

  return (
    <div id="app" className="container-fluid" style={{backgroundColor: "snow"}}>
      <div className="row">
        <Navbar />
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
};

export default withRouter(observer(App));
