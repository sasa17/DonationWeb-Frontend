import React from "react";
// import { Link } from "react-router-dom";

const MenuItem = ({ menu }) => {
  return (
    <div className="card-body">
      <ul className="list-group">
        <li className="list-group-item" style={{color: "darkgreen"}}>{menu.name} {menu.available_qty}</li>
      </ul>
    </div>
  );
};

export default MenuItem;
