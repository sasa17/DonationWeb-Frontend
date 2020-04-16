import React, { Component } from "react";

class Donators extends Component {
  render() {
    return (
      <div className="card text-center">
        <div
          className="card-header text-center"
          style={{ color: "darkgreen", fontSize: 24, fontWeight: "bold" }}
        >
          The Donaters
        </div>
        <div
          className="card-body text-center"
          style={{ backgroundColor: "snow" }}
        >
          <h5
            className="card-title mb-5 mt-2"
            style={{ color: "darkgreen", fontSize: 24, fontWeight: "bold" }}
          >
            Feed Forward now!
          </h5>
          <p>
            <img
              src={require("../../Images/Apple.png")}
              style={{ width: 200, height: 80, marginRight: 20 }}
              alt="dash"
            ></img>{" "}
            <img
              src={require("../../Images/Google.png")}
              style={{ width: 200, height: 85 }}
              alt="dash"
            ></img>
          </p>
        </div>
      </div>
    );
  }
}

export default Donators;
