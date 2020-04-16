import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import Spinner from "react-bootstrap/Spinner";

// Stores
import authStore from "../../Stores/authStore";
import donationBasketStore from "../../Stores/donationBasketStore";

// Components
import { LineGraph } from "./lineGraph";
import DonutGraph from "./donutGraph";
import MealsCard from "./mealsCard";
import DailyCard from "./dailyCard";
import WeeklyCard from "./weeklyCard";
import MonthlyCard from "./monthlyCard";
import YearlyCard from "./yearlyCard";

class Dashboard extends Component {
  async componentDidMount() {
    await donationBasketStore.fetchAllDonationBaskets();
  }

  render() {
    if (donationBasketStore.loading)
      return <Spinner animation="grow" variant="success" />;
    if (!authStore.user) return <Redirect to="/login" />;

    return (
      <div className="container-fluid position-relative">
        <div class="text-center">
          <img
            className="img-fluid"
            src={require("../../Images/FeedForward-wordless.png")}
            style={{ width: 250, height: 200, alignSelf: "center" }}
            alt="logo"
          />
          <h1 style={{ fontSize: 48, color: "darkgreen", fontWeight: "bold" }}>
            Dashboard
          </h1>
          <div className="row proBanner">
            <div className="col-12"></div>
          </div>
          <div className="row">
            <DailyCard />
            <WeeklyCard />
            <MonthlyCard />
            <YearlyCard />
          </div>
          <LineGraph />
          <div className="row">
            <DonutGraph />
            <MealsCard />
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Dashboard);
