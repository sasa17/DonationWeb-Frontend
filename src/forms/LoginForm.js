import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { observer } from "mobx-react";

// Store
import authStore from "../stores/authStore";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    authStore.login(this.state);
  };

  render() {
    console.log("state", this.state);
    const { username, password } = this.state;
    if (authStore.user) return <Redirect to="/profile" />;

    return (
      <div className="col-5 row-60 center mx-auto">
        <div className="card" style={{borderColor: "darkgreen", backgroundColor: "snow"}}>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
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
              <div className="form-group">
                <label htmlFor="password" style={{color: "darkgreen", fontSize: 18}}>Password: </label>
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
              <button type="submit" className="btn" style={{backgroundColor: "snow", color: "darkgreen", borderColor: "darkgreen", marginRight:50}}>
                Login
              </button>
              <Link to="/signup" className="btn btn-link my-2 my-sm-0" style={{backgroundColor: "snow", color: "darkgreen", borderColor: "darkgreen"}}>
                Signup
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(Login);
