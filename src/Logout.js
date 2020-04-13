import React from "react";
import { observer } from "mobx-react";

// Stores
import authStore from "./stores/authStore";

const Logout = () => {
  return (
    <button className= "btn" style={{backgroundColor: "red", fontSize: 14 ,color: "snow", fontWeight: "bold", borderColor: "snow"}} onClick={authStore.logout}>
      Logout {authStore.user.username}
    </button>
  );
};

export default observer(Logout);
