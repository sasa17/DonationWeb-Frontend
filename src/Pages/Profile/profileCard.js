import React, { Component } from "react";
import { observer } from "mobx-react";

// Stores
import profileStore from "../../Stores/profileStore";
import menuStore from "../../Stores/menuStore";
import authStore from "../../Stores/authStore";

class ProfileCard extends Component {
  async componentDidMount() {
    if (authStore.user) {
      console.log("USER");
      await profileStore.fetchProfileData();
      await menuStore.fetchAllMenuItems(profileStore.profile.id);
    }
  }
  render() {
    return (
      <div className="col-md-4 col-md-push-8">
        <div className="card width: 18rem;">
          <img
            className="img-responsive mx-1 my-5 center"
            src={profileStore.profile.image}
            alt={profileStore.profile.name}
            style={{ resizeMode: "contain" }}
          />
          <div className="card-body">
            <h5
              className="card-title"
              style={{ color: "darkgreen", fontWeight: "bold" }}
            >
              {profileStore.profile.name}
            </h5>
            <p className="card-text" style={{ color: "darkgreen" }}>
              {profileStore.profile.description}
            </p>
            <p className="card-text" style={{ color: "darkgreen" }}>
              Branch: {profileStore.profile.location}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(ProfileCard);
