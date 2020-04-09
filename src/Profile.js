import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

// // Components
// import AuthorCard from "./AuthorCard";
// import AddAuthorCard from "./AddAuthorCard";

// Store
import ProfileStore from "./stores/profileStore";
import authStore from "./stores/authStore";

class Profile extends Component {
  async componentDidMount() {
    if (authStore.user) {
      console.log("USER");
      await ProfileStore.fetchProfileData();
    }
  }
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    if (ProfileStore.loading) return <h1>Loading</h1>;
    return (
      <div className=" col-lg-4 col-md-6 col-12">
        <img
          src={ProfileStore.profile.image}
          className="profile-img img"
          alt={ProfileStore.profile.name}
        />
        <div className="card-body">
          <h5 className="card-title">
            <span>{ProfileStore.profile.name}</span>
          </h5>

          <h6 className="card-text">{ProfileStore.profile.description}</h6>
          <h6 className="card-text">{"\n" + ProfileStore.profile.location}</h6>
        </div>
      </div>
    );
  }
}

export default observer(Profile);
