import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { observer } from "mobx-react";

// Stores
import menuStore from "../../Stores/menuStore";
import donationBasketStore from "../../Stores/donationBasketStore";

class DonutGraph extends Component {
  usersDoughnutChartData = {
    datasets: [
      {
        data: [donationBasketStore.total_daily, menuStore.total],
        backgroundColor: ["darkgreen", "snow"],
        borderColor: ["darkgreen", "darkgreen"],
      },
    ],
    labels: ["Donations Receieved", "Total Donations Required"],
  };
  usersDoughnutChartOptions = {
    cutoutPercentage: 70,
    animationEasing: "easeOutBounce",
    animateRotate: true,
    animateScale: false,
    responsive: true,
    maintainAspectRatio: true,
    showScale: true,
    legend: {
      display: true,
      position: "right",
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
  };
  render() {
    return (
      <div className="col-md-6 ml-5 mr-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h4
                  className="card-title mb-5 d-none d-md-block"
                  style={{
                    fontSize: 20,
                    color: "darkgreen",
                    fontWeight: "bold",
                  }}
                >
                  Daily Donations
                </h4>
                <p
                  className="mb-0 font-weight-medium"
                  style={{ color: "darkgreen" }}
                >
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "KWD",
                  }).format(donationBasketStore.total_daily)}
                </p>
                <small className="text-muted ml-2">Donations Receieved</small>
                <p
                  className="mb-0 mt-5 font-weight-medium"
                  style={{ color: "darkgreen" }}
                >
                  {new Intl.NumberFormat("en-IN", {
                    style: "currency",
                    currency: "KWD",
                  }).format(menuStore.total)}
                </p>
                <small className="text-muted ml-2">
                  Total Donations Required
                </small>
              </div>
              <div className="col-8 mt-5 align-items-center">
                <Doughnut
                  data={this.usersDoughnutChartData}
                  options={this.usersDoughnutChartOptions}
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(DonutGraph);
