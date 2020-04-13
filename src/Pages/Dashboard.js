import React, { Component } from "react";
import { Line, Doughnut } from "react-chartjs-2";
import donationBasketStore from "../Stores/donationBasketStore";
import { Redirect } from "react-router-dom";
import authStore from "../Stores/authStore";
import menuStore from "../Stores/menuStore";
import { observer } from "mobx-react";

export class Dashboard extends Component {
  async componentDidMount() {
    await donationBasketStore.fetchAllDonationBaskets();
  }
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
    if (donationBasketStore.loading) return <h1>Loading</h1>;
    if (!authStore.user) return <Redirect to="/login" />;

    return (
      <div className="container-fluid position-relative">
        <div class="text-center">
          <img
            className="img-fluid"
            src={require("../Images/FeedForward-wordless.png")}
            style={{width: 250, height: 200, alignSelf: "center"}}
            alt="logo"
          />
        <h1 style={{ fontSize: 48, color: "darkgreen", fontWeight: "bold" }}>
          Dashboard
        </h1>
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
                  <div className="float-left">
                    <p className="mb-0 text-left" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold" }}>Daily Donations</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0" style={{color: "darkgreen"}}>
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
                  <div className="float-left">
                    <p className="mb-0 text-left" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold" }}>
                      Weekly Donations
                    </p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0" style={{color: "darkgreen"}}>
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
                  <div className="float-left">
                    <p className="mb-0 text-left" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold" }}>
                      Monthly Donations
                    </p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0" style={{color: "darkgreen"}}>
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
                  <div className="float-left">
                    <p className="mb-0 text-left" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold" }}>
                      Yearly Donations
                    </p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0" style={{color: "darkgreen"}}>
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
                  <h2 className="card-title mb-0" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold" }}>Quaterly Donations</h2>
                  <div className="wrapper d-flex"></div>
                </div>
                <div className="chart-container">
                  <Line
                    data={this.areaData}
                    options={this.areaOptions}
                    datasetKeyProvider={this.datasetKeyProvider}
                    height={80}
                    style={{color: "darkgreen"}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 ml-5 mr-5">
            <div className="card">
              <div className="card-body">
                <div className="row">
                <div className="col-4">
                    <h4 className="card-title mb-5 d-none d-md-block" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold"}}>
                      Daily Donations
                    </h4>
                    <p className="mb-0 font-weight-medium" style={{color: "darkgreen"}}>
                            KWD {donationBasketStore.total_daily}
                          </p>
                          <small className="text-muted ml-2">
                            Donations Receieved
                          </small>
                    <p className="mb-0 mt-5 font-weight-medium" style={{color: "darkgreen"}}>
                            KWD {menuStore.total}
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
          <div className="col-sm-4 ml-5 mt-5 mr-5">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col">
                    <h4 className="card-title mb-3" style={{fontSize: 20, color: "darkgreen", fontWeight: "bold" }}>
                      Meals Donated
                    </h4>
                    <h1 className="mb-0" style={{fontSize: 18, color: "darkgreen", fontWeight: "bold" }}>
                      {donationBasketStore.meals | 0} Meals
                    </h1>
                  </div>
                </div>
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
