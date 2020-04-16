import React, { Component } from "react";
import Initiative from "./initiative";
import Research from "./research";
import Restaurants from "./restaurants";
import Donators from "./donators";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid position-relative">
        <div className="text-center mb-5 mt-0">
          <img
            src={require("../../Images/FeedForward.png")}
            style={{
              width: 300,
              height: 300,
            }}
            alt="logo"
          />
        </div>
        <div className="row justify-content-center mt-5">
          <Initiative />
          <div
            className="card col-6 text-center pt-5"
            style={{ backgroundColor: "snow" }}
          >
            <blockquote
              className="blockquote"
              style={{
                textAlign: "center",
                color: "darkgreen",
                fontSize: 24,
                fontWeight: "initial",
              }}
            >
              “Current food and other resource consumption levels are not
              sustainable. We need to urgently focus on how to feed a growing
              population without further harming the planet”
            </blockquote>
            <footer className="blockquote-footer mb-5">
              Jingdong Hua, World Bank Vice President and Treasurer.
            </footer>
            <blockquote
              className="blockquote"
              style={{
                textAlign: "center",
                color: "darkgreen",
                fontSize: 24,
                fontWeight: "initial",
                marginTop: 30,
              }}
            >
              Food Waste: “Food that is of good quality and fit for human
              consumption but that does not get consumed, because it is
              discarded – either before or after it spoils”.
            </blockquote>
            <footer className="blockquote-footer">
              Lipinski et al. (2013)
            </footer>
          </div>
        </div>
        <div className="row justify-content-center">
          <Research />
          <Restaurants />{" "}
        </div>
        <Donators />
      </div>
    );
  }
}
export default Home;
