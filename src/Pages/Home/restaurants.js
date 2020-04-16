import React, { Component } from "react";

class Restaurants extends Component {
  render() {
    return (
      <div
        className="col-6 card text-center px-0"
        style={{ backgroundColor: "" }}
      >
        <div
          className="card-header text-center"
          style={{ color: "darkgreen", fontSize: 24, fontWeight: "bold" }}
        >
          The Restaurants
        </div>
        <div
          className="row text-center mx-0 my-0"
          style={{ backgroundColor: "snow" }}
        >
          <div
            className="card-body text-center col-md-6 row-flex"
            style={{ backgroundColor: "snow" }}
          >
            <h5
              className="card-title mb-5"
              style={{
                color: "darkgreen",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 30,
              }}
            >
              Goals
            </h5>
            <p
              style={{
                color: "darkgreen",
                fontSize: 16,
                textAlign: "left",
                marginBottom: 40,
                lineHeight: 3,
              }}
            >
              By particpating in our program, restaurants can take part in the
              initiative minimise waste of meals and cost of ingredients lost,
              as well as increasing their company's goodwill and community
              involvment
            </p>
          </div>
          <div
            className="card-body text-center col-md-6"
            style={{ backgroundColor: "snow" }}
          >
            <img
              src={require("../../Images/burgers.jpg")}
              style={{ height: 350 }}
              className="card-img-bottom"
              alt="dash"
            ></img>
          </div>
          <div
            className="card-body text-center"
            style={{ backgroundColor: "snow" }}
          >
            <h5
              className="card-title mb-3"
              style={{ color: "darkgreen", fontSize: 20, fontWeight: "bold" }}
            >
              Dashboard
            </h5>
            <p style={{ color: "darkgreen", fontSize: 16 }}>
              A clear dashboard illustrating progress of waste elimination and
              donation participation will also be provided
            </p>
            <img
              src={require("../../Images/Dash.png")}
              style={{ width: 350, height: 300 }}
              className="card-img-bottom"
              alt="dash"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Restaurants;
