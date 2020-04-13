import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "./stores/authStore";
import Logout from "./Logout";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top position-relative navbar-expand-lg navbar-light mb-3" style={{backgroundColor: 'darkgreen'}}>
      <div className="container-fluid">
      {authStore.user ? (<Link to="/profile">
      <img className="navbar-brand position-relative mr-3" src={require("./FeedForward-Inverted.png")} style={{width: 100}} alt="logo"/>
        </Link>
        ):(<Link to="/home"><img className="navbar-brand position-relative mr-3" src={require("./FeedForward-Inverted.png")} style={{width: 100}} alt="logo"/>
        </Link>)}
        <div className="navbar-nav ml-auto position-relative">
         <ul className="navbar-item position-relative">
           {authStore.user && (
             <>
            <li className="navbar-item position-relative">
              <Link to="/dashboard" style={{color: "snow", fontWeight: "bold"}}>Dashboard</Link>
            </li>
            </>)}
            <li className="navbar-item position-relative">
              <Link to="/contact" style={{color: "snow", fontWeight: "bold"}}>Contact</Link>
            </li>
          </ul>
          <span className="navbar-item position-relative">
              {authStore.user ? (
                <Logout />
              ) : (
              <Link to="/login" style={{color: "snow", fontWeight: "bold"}}>
                <button className="btn btn-default align-self-end" style={{backgroundColor: "transparent", fontSize: 14 ,color: "snow", fontWeight: "bold", borderColor: "snow"}} >Login</button>
              </Link>
              )}
          </span>
        </div>
      </div>
      </nav>
    );
  }
}

export default observer(Navbar);
