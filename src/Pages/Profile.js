import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

// Store
import profileStore from "../Stores/profileStore";
import menuStore from "../Stores/menuStore";
import authStore from "../Stores/authStore";
import MenuItem from "./MenuItem";


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
    if (profileStore.loading) return <h1>Loading</h1>;
    const items = menuStore.menu.map((item) => (
      <MenuItem menu={item} key={item.id} />
    ));
    return (
      <div className="container-fluid position-relative">
        <div class="text-center">
          <img
            className="img-fluid"
            src={require("../Images/FeedForward-wordless.png")}
            style={{width: 250, height: 200, alignSelf: "center"}}
            alt="logo"
          />
        <h1 style={{ fontSize: 48, color: "darkgreen", fontWeight: "bold" }}>
          Profile
        </h1>
        </div>
        <div className="row">
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
          <div className="col-md-8 col-md-pull-4">
            <table className="mt-3 table">
              <thead>
                <tr>
                  <th style={{ color: "darkgreen", fontWeight: "bold", fontSize: 18 }}>Meal</th>
                  <th style={{ color: "darkgreen", fontWeight: "bold", fontSize: 18 }}>Quantity available</th>
                  <th style={{ color: "darkgreen", fontWeight: "bold", fontSize: 18 }}>Submit</th>
                </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
              </table>
              <button
                className="btn rounded col"
                style={{ backgroundColor: "darkgreen", color: "snow" }}
              >
                Add Menu Items
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default observer(Profile);
