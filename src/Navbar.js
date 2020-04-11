import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "./stores/authStore";
import Logout from "./Logout";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: 'darkgreen'}}>
        <h className="navbar-brand" style={{fontWeight: "bold", color: "snow", marginLeft: 15, fontSize: 34}}>Feed Forward</h>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/dashboard" style={{color: "snow", fontWeight: "bold"}}>Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" style={{color: "snow", fontWeight: "bold"}}>Profile</Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <span className="nav navbar-nav navbar-right">
          {authStore.user ? (
            <Logout />
          ) : (
            <Link to="/login" style={{color: "snow", fontWeight: "bold"}}>
              <button className="btn btn-default align-self-end" style={{backgroundColor: "transparent", fontSize: 14 ,color: "snow", fontWeight: "bold", borderColor: "snow"}} >Login</button>
            </Link>
          )}
          </span>
          </ul>
      </nav>
    );
  }
}

export default observer(Navbar);
