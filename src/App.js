import React from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { observer } from "mobx-react";

// Components
import Sidebar from "./Sidebar";
import SignupForm from "./forms/SignupForm";
import LoginForm from "./forms/LoginForm";
import Profile from "./Profile";
import Dashboard from "./Dashboard";

import authStore from "./stores/authStore";

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
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">{authStore.user && <Sidebar />}</div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
};

export default withRouter(observer(App));
