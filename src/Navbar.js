import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import authStore from "./stores/authStore";
import Logout from "./Logout";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light mb-3" style={{backgroundColor: 'darkgreen'}}>
      <div className="container-fluid">
        <h1 className="navbar-brand mr-3" style={{fontWeight: "bold", color: "snow", marginLeft: 15, fontSize: 34}}>Feed Forward</h1>
        <div className="navbar-nav ml-auto">
         <ul className="navbar-item ">
           {authStore.user && (
             <>
            <li className="navbar-item">
              <Link to="/dashboard" style={{color: "snow", fontWeight: "bold"}}>Dashboard</Link>
            </li>
            <li className="navbar-item">
              <Link to="/profile" style={{color: "snow", fontWeight: "bold"}}>Profile</Link>
            </li>
            </>)}
          </ul>
          <span className="navbar-item">
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
