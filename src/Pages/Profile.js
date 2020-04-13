import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";

// Store
import profileStore from "../stores/profileStore";
import menuStore from "../stores/menuStore";
import authStore from "../stores/authStore";
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
        <div class="media container-fluid col-md-6 row-1 position-relative">
      <img src={require("../FeedForward-wordless.png")} className="w-100 h-100" alt="logo"/>
      </div>
        <h2 className="mt-2 center" style={{fontSize: 32, color: "darkgreen", fontWeight: "bold"}}>
        {profileStore.profile.name} Profile
          </h2>
        <div className="row">
          <div className="col-md-4 col-md-push-8">
            <div className="card width: 18rem;">
              <img
                className="img-responsive mx-1 my-5 center"
                src={profileStore.profile.image}
                alt={profileStore.profile.name}
                style={{resizeMode:"contain"}}
              />
              <div className="card-body">
              <h5 className="card-title" style={{color: "darkgreen", fontWeight: "bold"}}>
                  {profileStore.profile.name}
                </h5>
                <p className="card-text" style={{color: "darkgreen"}}>
                  {profileStore.profile.description}
                </p>
                <p className="card-text" style={{color: "darkgreen"}}>
                  Branch: {profileStore.profile.location}
                </p>
              </div>
            </div>
            </div>
            <div className="col-md-8 col-md-pull-4">
              <div className="card">
                {items}
                <button className="btn-success rounded btn-block" style={{backgroundColor: "darkgreen", color: "snow"}}>
                  Add Menu Items
                </button>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default observer(Profile);
