import React, { Component } from "react";
import { observer } from "mobx-react";
import { Redirect } from "react-router-dom";
import SideBar from "./Navbar";

// // Components
// import AuthorCard from "./AuthorCard";
// import AddAuthorCard from "./AddAuthorCard";

// Store
import ProfileStore from "./stores/profileStore";
import menuStore from "./stores/menuStore";
import authStore from "./stores/authStore";
import MenuItem from "./MenuItem";

class Profile extends Component {
  async componentDidMount() {
    if (authStore.user) {
      console.log("USER");
      await ProfileStore.fetchProfileData();
      await menuStore.fetchAllMenuItems(ProfileStore.profile.id);
    }
  }
  render() {
    if (!authStore.user) return <Redirect to="/login" />;
    if (ProfileStore.loading) return <h1>Loading</h1>;
    const items = menuStore.menu.forEach((item) => (
      <MenuItem menu={item} key={item.id} />
    ));
    return (
      <div className="container fluid">
        <div className="container col-4 bg-white rounded row-0 left">
          <img
            className="img-responsive mx-1 my-5 center"
            src={ProfileStore.profile.image}
            alt={ProfileStore.profile.name}
            style={{}}
          />
        </div>

        <div className="container col-7 bg-white rounded right ">
          <h2 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2 center">
            Restaurant Profile
          </h2>
          <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            {ProfileStore.profile.name}
          </h3>
          <h5 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            {ProfileStore.profile.description}
          </h5>
          <h5 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
            Branch: {ProfileStore.profile.location}
          </h5>

          <h6>{items}</h6>
          <button className="btn-success rounded btn-block">
            Add Menu Items
          </button>
        </div>
      </div>
    );
  }
}

export default observer(Profile);
