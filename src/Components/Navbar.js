import React, { Component } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "../Stores/authStore";
import Logout from "./Logout";

class Navbar extends Component {
  render() {
    return (
      <nav
        className="navbar position-relative navbar-expand-lg navbar-light"
        style={{ backgroundColor: "darkgreen" }}
      >
        <div className="container-fluid position-relative">
          {authStore.user ? (
            <Link to="/profile">
              <img
                className="navbar-brand position-relative mr-3"
                src={require("../Images/FeedForward-Inverted.png")}
                style={{ width: 70, height: 70 }}
                alt="logo"
              />
            </Link>
          ) : (
            <Link to="/home">
              <img
                className="navbar-brand position-relative mr-3"
                src={require("../Images/FeedForward-Inverted.png")}
                style={{ width: 70, height: 70 }}
                alt="logo"
              />
            </Link>
          )}
          <div className="navbar-nav ml-auto position-relative">
            <ul className="navbar-item position-relative">
              {authStore.user && (
                <>
                  <li className="navbar-item position-relative">
                    <Link
                      to="/dashboard"
                      style={{ color: "snow", fontWeight: "bold" }}
                    >
                      Dashboard
                    </Link>
                  </li>
                </>
              )}
              <li className="navbar-item position-relative">
                <Link
                  to="/contact"
                  style={{ color: "snow", fontWeight: "bold" }}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navbar-item position-relative">
              {authStore.user ? (
                <Logout />
              ) : (
                <Link to="/login" style={{ color: "snow", fontWeight: "bold" }}>
                  <button
                    className="btn btn-default align-self-end position-relative"
                    style={{
                      backgroundColor: "transparent",
                      fontSize: 14,
                      color: "snow",
                      fontWeight: "bold",
                      borderColor: "snow",
                    }}
                  >
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default observer(Navbar);
