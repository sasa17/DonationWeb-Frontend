import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { observer } from "mobx-react";

// Stores
import donationBasketStore from "../../Stores/donationBasketStore";

export class LineGraph extends Component {
  areaData = {
    labels: ["1", "2", "3", "4"],
    datasets: [
      {
        label: "Total Required",
        data: [
          0,
          donationBasketStore.restaurant_total,
          donationBasketStore.restaurant_total_past1,
          donationBasketStore.restaurant_total_past2,
        ],
        backgroundColor: "#2196f3",
        borderColor: "#0c83e2",
        borderWidth: 1,
        fill: true,
        datasetKeyProvider: "key2",
      },
      {
        label: "Total Donations Received",
        data: [
          0,
          donationBasketStore.total_month,
          donationBasketStore.past_1_month,
          donationBasketStore.past_2_month,
        ],
        backgroundColor: "#19d895",
        borderColor: "#15b67d",
        borderWidth: 1,
        fill: true,
        datasetKeyProvider: "key1",
      },
    ],
  };

  areaOptions = {
    responsive: true,
    maintainAspectRatio: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            color: "#F2F6F9",
          },
          ticks: {
            beginAtZero: true,
            min: 0,
            max: 1000,
            stepSize: 250,
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            color: "#F2F6F9",
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 2,
      },
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },
    stepsize: 1,
  };

  render() {
    return (
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2
                  className="card-title mb-0"
                  style={{
                    fontSize: 20,
                    color: "darkgreen",
                    fontWeight: "bold",
                  }}
                >
                  Quarterly Donations
                </h2>
                <div className="wrapper d-flex"></div>
              </div>
              <div className="chart-container">
                <Line
                  data={this.areaData}
                  options={this.areaOptions}
                  datasetKeyProvider={this.datasetKeyProvider}
                  height={80}
                  style={{ color: "darkgreen" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default observer(LineGraph);
