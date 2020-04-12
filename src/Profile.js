import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
// import SideBar from "./Navbar";

// // Components
// import AuthorCard from "./AuthorCard";
// import AddAuthorCard from "./AddAuthorCard";

// Store
import profileStore from "./stores/profileStore";
import menuStore from "./stores/menuStore";
import authStore from "./stores/authStore";
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
      <div className="container-fluid">
        <h2 className="font-bold mt-2 center" style={{fontSize: 32, color: "darkgreen"}}>
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
              <h5 className="card-title">
                  {profileStore.profile.name}
                </h5>
                <p className="card-text">
                  {profileStore.profile.description}
                </p>
                <p className="card-text">
                  Branch: {profileStore.profile.location}
                </p>
              </div>
            </div>
            </div>
            <div className="col-md-8 col-md-pull-4">
              <div className="card">
                {items}
                <button className="btn-success rounded btn-block">
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
