import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ menu }) => {
  return (
    <div className="card-body">
      <h5 className="card-text">{menu.name}</h5>
      <h5 className="card-text">{menu.available_qty}</h5>
    </div>
  );
};

export default MenuItem;
