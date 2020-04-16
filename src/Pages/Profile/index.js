import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

// Stores
import profileStore from "../../Stores/profileStore";
import menuStore from "../../Stores/menuStore";
import authStore from "../../Stores/authStore";

// Components
import ProfileCard from "./profileCard";
import MenuTable from "./menuTable";

class Profile extends Component {
  async componentDidMount() {
    if (authStore.user) {
      console.log("USER");
      await profileStore.fetchProfileData();
      await menuStore.fetchAllMenuItems(profileStore.profile.id);
    }
  }
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    if (profileStore.loading)
      return <Spinner animation="grow" variant="success" />;
    return (
      <div className="container-fluid position-relative">
        <div class="text-center">
          <img
            className="img-fluid"
            src={require("../../Images/FeedForward-wordless.png")}
            style={{ width: 250, height: 200, alignSelf: "center" }}
            alt="logo"
          />
          <h1 style={{ fontSize: 48, color: "darkgreen", fontWeight: "bold" }}>
            Profile
          </h1>
        </div>
        <div className="row">
          <ProfileCard />
          <MenuTable />
        </div>
      </div>
    );
  }
}

export default observer(Profile);
