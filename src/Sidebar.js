import React from "react";
import { NavLink, Link } from "react-router-dom";
import { observer } from "mobx-react";

// Store
import authStore from "./stores/authStore";

// Components
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div id="sidebar">
      <section>
        <h4 className="menu-item active">
          <NavLink to="/profile">Profile</NavLink>
        </h4>
        <h4 className="menu-item active">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </h4>
      </section>
      <div className="menu-item">
        {authStore.user ? (
          <Logout />
        ) : (
          <Link to="/login">
            <button className="btn btn-default">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default observer(Sidebar);
