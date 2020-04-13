import React, { Component } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
import { ProgressBar } from "react-bootstrap";
import donationBasketStore from "../stores/donationBasketStore";
import { Redirect } from "react-router-dom";
import authStore from "../stores/authStore";
import menuStore from "../stores/menuStore";
import { observer } from "mobx-react";

export class Dashboard extends Component {
  async componentDidMount() {
    await donationBasketStore.fetchAllDonationBaskets();
  }
  areaData = {
    labels: ["0", "1", "2", "3"],
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
  usersDoughnutChartData = {
    datasets: [
      {
        data: [donationBasketStore.total_daily, menuStore.total],
        backgroundColor: ["#19d895", "#2196f3"],
        borderColor: ["#19d895", "#2196f3"],
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
      display: false,
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

  amountDueBarData = {
    labels: [
      "Day 1",
      "Day 2",
      "Day 3",
      "Day 4",
      "Day 5",
      "Day 6",
      "Day 7",
      "Day 8",
      "Day 9",
      "Day 10",
    ],
    datasets: [
      {
        label: "Profit",
        data: [39, 19, 25, 16, 31, 39, 12, 18, 33, 24],
        backgroundColor: [
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
        ],
        borderColor: [
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
          "#2196f3",
        ],
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  amountDueBarOptions = {
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    scales: {
      responsive: true,
      maintainAspectRatio: true,
      yAxes: [
        {
          display: false,
          gridLines: {
            color: "rgba(0, 0, 0, 0.03)",
          },
        },
      ],
      xAxes: [
        {
          display: false,
          barPercentage: 0.4,
          gridLines: {
            display: false,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
  };
  toggleProBanner() {
    document.querySelector(".proBanner").classList.toggle("hide");
  }

  render() {
    if (donationBasketStore.loading) return <h1>Loading</h1>;
    if (!authStore.user) return <Redirect to="/login" />;

    return (
      <div>
        <h2
          className="font-bold leading-normal mb-2 text-gray-800 mb-2 center mt-2"
          style={{ fontSize: 50, color: "darkgreen" }}
        >
          Dashboard
        </h2>
        <div className="row proBanner">
          <div className="col-12"></div>
        </div>

        <div className="row">
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-cube text-danger icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">Daily Donations</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        KWD {donationBasketStore.total_daily}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i
                    className="mdi mdi-alert-octagon mr-1"
                    aria-hidden="true"
                  ></i>{" "}
                  Donations received on {new Date().getDate() - 1}/
                  {new Date().getMonth()}/{new Date().getFullYear()}{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-receipt text-warning icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">
                      Weekly Donations
                    </p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        KWD {donationBasketStore.total_weekly}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i
                    className="mdi mdi-bookmark-outline mr-1"
                    aria-hidden="true"
                  ></i>{" "}
                  Donations this week{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-poll-box text-success icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">
                      Monthly Donations
                    </p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        KWD {donationBasketStore.total_month}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i>{" "}
                  Donations this month{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
            <div className="card card-statistics">
              <div className="card-body">
                <div className="clearfix">
                  <div className="float-left">
                    <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
                  </div>
                  <div className="float-right">
                    <p className="mb-0 text-right text-dark">
                      Yearly Donations
                    </p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        KWD {donationBasketStore.total_year}
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-reload mr-1" aria-hidden="true"></i>{" "}
                  Donations Made in {new Date().getFullYear()}{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 grid-margin">
            <div className="card">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h2 className="card-title mb-0">Quaterly Donations</h2>
                  <div className="wrapper d-flex"></div>
                </div>
                <div className="chart-container">
                  <Line
                    data={this.areaData}
                    options={this.areaOptions}
                    datasetKeyProvider={this.datasetKeyProvider}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-5 d-flex align-items-center">
                    <Doughnut
                      data={this.usersDoughnutChartData}
                      options={this.usersDoughnutChartOptions}
                      width={180}
                    />
                  </div>
                  <div className="col-md-7">
                    <h4 className="card-title font-weight-medium mb-0 d-none d-md-block">
                      Daily Donations
                    </h4>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">
                            KWD {menuStore.total}
                          </p>
                          <small className="text-muted ml-2">
                            Total Donations Required
                          </small>
                        </div>
                        <p className="mb-0 font-weight-medium"></p>
                      </div>
                      <ProgressBar variant="primary" now={100} />
                    </div>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">
                            KWD {donationBasketStore.total_daily}
                          </p>
                          <small className="text-muted ml-2">
                            Donations Receieved
                          </small>
                        </div>
                        <p className="mb-0 font-weight-medium"></p>
                      </div>
                      <ProgressBar
                        variant="success"
                        now={
                          (donationBasketStore.total_daily / menuStore.total) *
                          100
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-7">
                    <h4 className="card-title font-weight-medium mb-3">
                      Meals Donated
                    </h4>
                    <h1 className="font-weight-medium mb-0 text-dark">
                      {donationBasketStore.meals | 0} Meals
                    </h1>
                  </div>
                  {/* <div className="col-md-5 d-flex align-items-end mt-4 mt-md-0">
                    <Bar
                      data={this.amountDueBarData}
                      options={this.amountDueBarOptions}
                    />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Dashboard);
