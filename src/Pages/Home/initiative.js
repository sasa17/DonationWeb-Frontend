import React, { Component } from "react";

class Initiative extends Component {
  render() {
    return (
      <div
        className="col-5 card text-center ml-3 px-0"
        style={{ backgroundColor: "snow" }}
      >
        <img
          src={require("../../Images/initiative.jpg")}
          alt="logo"
          className="card-img-top"
          style={{ height: 300 }}
        />
        <div
          className="card-header text-center"
          style={{ color: "darkgreen", fontSize: 24, fontWeight: "bold" }}
        >
          The Initiative
        </div>
        <div
          className="card-body text-center"
          style={{ backgroundColor: "snow" }}
        >
          <h5
            style={{
              color: "darkgreen",
              fontSize: 18,
              fontWeight: "initial",
              lineHeight: 2,
            }}
          >
            Our mission is to provide a one-stop platform to provide donation
            opportunities and waste reduction, thuse decreasing food waste and
            increasing community outreach.
          </h5>
        </div>
      </div>
    );
  }
}

export default Initiative;
