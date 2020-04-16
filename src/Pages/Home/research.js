import React, { Component } from "react";

class Research extends Component {
  render() {
    return (
      <div
        className="col-5 card text-center px-0"
        style={{ backgroundColor: "snow" }}
      >
        <img
          src={require("../../Images/research.jpg")}
          alt="logo"
          className="card-img-top"
          style={{ height: 250 }}
        />
        <div
          className="card-header text-center"
          style={{ color: "darkgreen", fontSize: 24, fontWeight: "bold" }}
        >
          The Research
        </div>
        <div
          className="card-body text-center"
          style={{
            backgroundColor: "snow",
            color: "darkgreen",
            fontSize: 16,
            lineHeight: 2,
          }}
        >
          <p>
            “Current food and other resource consumption levels are not
            sustainable. We need to urgently focus on how to feed a growing
            population without further harming the planet,” said Jingdong Hua,
            World Bank Vice President and Treasurer.
          </p>
          <p>
            According to The World Bank in 2019, "one-third of all food produced
            in the world is lost or wasted every year. If food loss and waste
            could be represented as its own country, it would be the third
            largest greenhouse gas emitter…At the same time, approximately half
            of the world’s population is suffering from various forms of
            malnutrition: hunger, stunting, lack of key nutrients, and
            obesity—illnesses that stifle human capital development and create a
            costly public health crisis.”{" "}
          </p>
          <p>
            Another study stated that The Gulf Cooperation Countries (GCC) are
            amongst the world’s top food wasters, while The Food Sustainability
            Index stated that Saudi Arabia wastes the most food annually,
            amounting to 427 Kgs per person, while the UAE wastes around 196.6
            kgs per person.
          </p>
        </div>
      </div>
    );
  }
}

export default Research;
