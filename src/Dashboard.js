import React, { Component } from "react";
import { Line, Doughnut, Bar } from "react-chartjs-2";
// import { Sparklines, SparklinesBars } from "react-sparklines";
import { ProgressBar} from "react-bootstrap";

// import DatePicker from 'react-datepicker';
// import { Dropdown } from 'react-bootstrap';

export class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      todos: [
        {
          id: 1,
          task: "Pick up kids from school",
          isCompleted: false,
        },
        {
          id: 2,
          task: "Prepare for presentation",
          isCompleted: false,
        },
        {
          id: 3,
          task: "Print Statements",
          isCompleted: false,
        },
        {
          id: 4,
          task: "Create invoice",
          isCompleted: false,
        },
        {
          id: 5,
          task: "Call John",
          isCompleted: false,
        },
      ],
      inputValue: "",
    };
    this.statusChangedHandler = this.statusChangedHandler.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
  }
  statusChangedHandler(event, id) {
    const todo = { ...this.state.todos[id] };
    todo.isCompleted = event.target.checked;

    const todos = [...this.state.todos];
    todos[id] = todo;

    this.setState({
      todos: todos,
    });
  }

  addTodo(event) {
    event.preventDefault();

    const todos = [...this.state.todos];
    todos.unshift({
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      task: this.state.inputValue,
      isCompleted: false,
    });

    this.setState({
      todos: todos,
      inputValue: "",
    });
  }

  removeTodo(index) {
    const todos = [...this.state.todos];
    todos.splice(index, 1);

    this.setState({
      todos: todos,
    });
  }

  inputChangeHandler(event) {
    this.setState({
      inputValue: event.target.value,
    });
  }
  areaData = {
    labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    datasets: [
      {
        label: "Product-1",
        data: [3, 3, 8, 5, 7, 4, 6, 4, 6, 3],
        backgroundColor: "#2196f3",
        borderColor: "#0c83e2",
        borderWidth: 1,
        fill: true,
        datasetKeyProvider: "key1",
      },
      {
        label: "Product-2",
        data: [7, 5, 14, 7, 12, 6, 10, 6, 11, 5],
        backgroundColor: "#19d895",
        borderColor: "#15b67d",
        borderWidth: 1,
        fill: true,
        datasetKeyProvider: "key2",
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
            max: 20,
            stepSize: 5,
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
        data: [80, 34, 100],
        backgroundColor: ["#19d895", "#2196f3", "#dde4eb"],
        borderColor: ["#19d895", "#2196f3", "#dde4eb"],
      },
    ],
    labels: ["Request", "Email"],
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
    return (
      <div>
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
                    <p className="mb-0 text-right text-dark">Total Revenue</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        $65,650
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i
                    className="mdi mdi-alert-octagon mr-1"
                    aria-hidden="true"
                  ></i>{" "}
                  65% lower growth{" "}
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
                    <p className="mb-0 text-right text-dark">Orders</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        3455
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i
                    className="mdi mdi-bookmark-outline mr-1"
                    aria-hidden="true"
                  ></i>{" "}
                  Product-wise sales{" "}
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
                    <p className="mb-0 text-right text-dark">Sales</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        5693
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-calendar mr-1" aria-hidden="true"></i>{" "}
                  Weekly Sales{" "}
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
                    <p className="mb-0 text-right text-dark">Employees</p>
                    <div className="fluid-container">
                      <h3 className="font-weight-medium text-right mb-0 text-dark">
                        246
                      </h3>
                    </div>
                  </div>
                </div>
                <p className="text-muted mt-3 mb-0">
                  <i className="mdi mdi-reload mr-1" aria-hidden="true"></i>{" "}
                  Product-wise sales{" "}
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
                  <h2 className="card-title mb-0">Product Analysis</h2>
                  <div className="wrapper d-flex">
                    <div className="d-flex align-items-center mr-3">
                      <span className="dot-indicator bg-success"></span>
                      <p className="mb-0 ml-2 text-muted">Product</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <span className="dot-indicator bg-primary"></span>
                      <p className="mb-0 ml-2 text-muted">Resources</p>
                    </div>
                  </div>
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
                      Active Users
                    </h4>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">67,550</p>
                          <small className="text-muted ml-2">
                            Email account
                          </small>
                        </div>
                        <p className="mb-0 font-weight-medium">80%</p>
                      </div>
                      <ProgressBar variant="primary" now={80} />
                    </div>
                    <div className="wrapper mt-4">
                      <div className="d-flex justify-content-between mb-2">
                        <div className="d-flex align-items-center">
                          <p className="mb-0 font-weight-medium">21,435</p>
                          <small className="text-muted ml-2">Requests</small>
                        </div>
                        <p className="mb-0 font-weight-medium">34%</p>
                      </div>
                      <ProgressBar variant="success" now={34} />
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
                      Amount Due
                    </h4>
                    <h1 className="font-weight-medium mb-0 text-dark">$5998</h1>
                    <p className="text-muted">Milestone Completed</p>
                    <p className="mb-0">Payment for next week</p>
                  </div>
                  <div className="col-md-5 d-flex align-items-end mt-4 mt-md-0">
                    <Bar
                      data={this.amountDueBarData}
                      options={this.amountDueBarOptions}
                    />
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

export default Dashboard;