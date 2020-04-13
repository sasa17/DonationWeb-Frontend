import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Store
import authStore from "../stores/authStore";

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
      <div className="col-auto row-auto m-auto position-relative">
        <div class="media container-fluid col-2 row-1 position-relative">
      <img src={require("../FeedForward-wordless.png")} className="w-100 h-100" alt="logo"/>
      </div>
        <div className="card position-relative" style={{borderColor: "darkgreen", backgroundColor: "snow"}}>
          <div className="card-body position-relative">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group position-relative">
                <label htmlFor="username" style={{color: "darkgreen", fontSize: 18}}>Username:</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={username}
                  name="username"
                  placeholder=""
                  style={{color: "darkgreen", marginBottom:50}}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group position-relative">
                <label htmlFor="email" style={{color: "darkgreen", fontSize: 18}}>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  name="email"
                  placeholder=""
                  style={{color: "darkgreen", marginBottom:50}}
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group position-relative">
                <label htmlFor="password" style={{color: "darkgreen", fontSize: 18}}>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={password}
                  name="password"
                  placeholder=""
                  style={{color: "darkgreen", marginBottom:50}}
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn position-relative" style={{backgroundColor: "snow", color: "darkgreen", borderColor: "darkgreen", marginRight:50}}>
                Signup
              </button>
              <Link to="/login" className="btn position-relative" style={{backgroundColor: "snow", color: "darkgreen", borderColor: "darkgreen"}}>
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
