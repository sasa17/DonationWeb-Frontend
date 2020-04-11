import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "./stores/authStore";
import Logout from "./Logout";

class Navbar extends Component {
  render() {
    return (
      <nav className="nav - wrapper teal lighten-2">
        <div className="container">
          <ul className="right">
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              {authStore.user ? (
                <Logout />
              ) : (
                <Link to="/login">
                  <button className="btn btn-default">Login</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default observer(Navbar);
