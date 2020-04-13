import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div class="container-fluid row d-flex">
        <div class="media container-fluid col-md-2 position-relative">
      <img src={require("../FeedForward.png")} style={{width: 450, height: 450, alignSelf: "center"}} alt="logo"/>
      </div>    
      <div class="row">
        <div class="col-sm-1">
          <div class="panel panel-primary">
            <div class="panel-heading">Initiative</div>
            <div class="panel-body">
              <p>A one-stop platform to provide donation opportunity and waste reduction</p>
              <ul>
                <li>To decrease food waste</li>
                <li>To increase community outreach</li>
              </ul>
            </div>
          </div>
        </div>
    <div class="col-sm-1">
      <div class="panel panel-primary">
        <div class="panel-heading">Restaurants</div>
          <div class="panel-body">
            <div class="col-sm-6">
              <div class="panel panel-primary">
                <div class="panel-heading">Goal</div>
                  <div class="panel-body">
                    <ul>
                      <li>To minimise waste of meals and cost of ingredients</li>
                      <li>To increase compnay's goodwill</li>
                      <li>To increase community involvment</li>
                    </ul>
                  </div>
                </div>
            <div class="col-sm-6">
              <div class="panel panel-primary">
                <div class="panel-heading">Dashboard</div>
                  <div class="panel-body"><img src={require("../Dash.png")}></img>
                    A clear dashboard illustrating progress of waste elimination and donation participation</div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading">Donators</div>
        <div class="panel-body"></div>
      </div>
    </div>
  </div>
</div>
    );
  }
}

export default Landing;
