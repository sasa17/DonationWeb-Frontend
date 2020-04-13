import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div className="container-fluid position-relative">
        <div className="text-center mb-5">
      <img src={require("../Images/FeedForward.png")} style={{width: 300, height: 300}} alt="logo"/>
      </div>    
        <div className="card text-center" >
            <div className="card-header text-center" style={{color: "darkgreen", fontSize: 32, fontWeight: "bold"}}>Initiative</div>
            <div className="card-body text-center" style={{backgroundColor: "snow"}}>
              <h5 className="card-title mb-5" style={{color: "darkgreen", fontSize: 18}}>A one-stop platform to provide donation opportunities and waste reduction</h5>
                <li style={{color: "darkgreen", fontSize: 18, marginBottom: 20}}>To decrease food waste</li>
                <li style={{color: "darkgreen", fontSize: 18, marginBottom: 20}}>To increase community outreach</li>
            </div>
          </div>
          <div className="card text-center transparent" >
            <div className="card-header text-center" style={{color: "darkgreen", fontSize: 32, fontWeight: "bold"}}>Restaurants</div>
            <div className="row text-center mx-5" style={{backgroundColor: "snow"}}>
            <div className="card-body text-center col-md-6 row-fluid" style={{backgroundColor: "snow"}}>
              <h5 className="card-title mb-5" style={{color: "darkgreen", fontSize: 24, fontWeight: "bold"}}>Goals</h5>
                <li style={{color: "darkgreen", fontSize: 18, textAlign: "left", marginBottom: 20}}>To minimise waste of meals and cost of ingredients</li>
                <li style={{color: "darkgreen", fontSize: 18, textAlign: "left", marginBottom: 20}}>To increase compnay's goodwill</li>
                <li style={{color: "darkgreen", fontSize: 18, textAlign: "left", marginBottom: 20}}>To increase community involvment</li>
            </div>
            <div className="card-body text-center col-md-6" style={{backgroundColor: "snow"}}>
              <h5 className="card-title mb-5" style={{color: "darkgreen", fontSize: 24, fontWeight: "bold"}}>Dashboard</h5>
              <p style={{color: "darkgreen", fontSize: 18}}>A clear dashboard illustrating progress of waste elimination and donation participation</p>
              <img src={require("../Images/Dash.png")} style={{width: 350, height: 300}} alt="dash"></img>
            </div>
            </div>
          </div>
          <div className="card text-center" >
            <div className="card-header text-center" style={{color: "darkgreen", fontSize: 32, fontWeight: "bold"}}>Donaters</div>
            <div className="card-body text-center" style={{backgroundColor: "snow"}}>
              <h5 className="card-title mb-5 mt-5" style={{color: "darkgreen", fontSize: 28, fontWeight: "bold"}}>Feed Forward now!</h5>
              <p>
              <img src={require("../Images/Apple.png")} style={{width: 350, height: 100, marginRight: 20}} alt="dash"></img> <img src={require("../Images/Google.png")} style={{width: 350, height: 115}} alt="dash"></img>
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default Landing;
