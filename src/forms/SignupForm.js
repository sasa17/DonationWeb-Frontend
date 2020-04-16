import React, { Component } from "../../node_modules/react";
import { Link, Redirect } from "../../node_modules/react-router-dom";
import { observer } from "../../node_modules/mobx-react";

// Store
import authStore from "../Stores/authStore";

class Signup extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(this.state);
  };

  render() {
    const { username, email, password } = this.state;

    if (authStore.user) return <Redirect to="/" />;

    return (
      <div className="col-5 row-60 mx-auto position-relative">
        <div class="text-center">
          <img
            className="img-fluid"
            src={require("../Images/FeedForward.png")}
            style={{ width: 250, height: 250, alignSelf: "center" }}
            alt="logo"
          />
        </div>
        <div
          className="card position-relative"
          style={{ borderColor: "darkgreen", backgroundColor: "snow" }}
        >
          <div className="card-body position-relative">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group position-relative">
                <label
                  htmlFor="username"
                  style={{ color: "darkgreen", fontSize: 18 }}
                >
                  Username:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder=""
                  style={{ color: "darkgreen", marginBottom: 50 }}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group position-relative">
                <label
                  htmlFor="email"
                  style={{ color: "darkgreen", fontSize: 18 }}
                >
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  placeholder=""
                  style={{ color: "darkgreen", marginBottom: 50 }}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group position-relative">
                <label
                  htmlFor="password"
                  style={{ color: "darkgreen", fontSize: 18 }}
                >
                  Password:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder=""
                  style={{ color: "darkgreen", marginBottom: 50 }}
                  onChange={this.handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn position-relative"
                style={{
                  backgroundColor: "snow",
                  color: "darkgreen",
                  borderColor: "darkgreen",
                  marginRight: 50,
                }}
              >
                Signup
              </button>
              <Link
                to="/login"
                className="btn position-relative"
                style={{
                  backgroundColor: "snow",
                  color: "darkgreen",
                  borderColor: "darkgreen",
                }}
              >
                I already have an account
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Signup);
