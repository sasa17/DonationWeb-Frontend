import React, { Component } from "react";
import { observer } from "mobx-react";

// Stores
import donationBasketStore from "../../Stores/donationBasketStore";

class MonthlyCard extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
        <div className="card card-statistics">
          <div className="card-body">
            <div className="clearfix">
              <div className="float-left">
                <i className="mdi mdi-poll-box text-success icon-lg"></i>
              </div>
              <div className="float-left">
                <p
                  className="mb-0 text-left"
                  style={{
                    fontSize: 20,
                    color: "darkgreen",
                    fontWeight: "bold",
                  }}
                >
                  Monthly Donations
                </p>
                <div className="fluid-container">
                  <h3
                    className="font-weight-medium text-right mb-0"
                    style={{ color: "darkgreen" }}
                  >
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "KWD",
                    }).format(donationBasketStore.total_month)}
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
    );
  }
}

export default observer(MonthlyCard);
