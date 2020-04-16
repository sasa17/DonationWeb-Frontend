import React, { Component } from "react";
import { observer } from "mobx-react";

// Stores
import donationBasketStore from "../../Stores/donationBasketStore";

class YearlyCard extends Component {
  render() {
    return (
      <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 grid-margin stretch-card">
        <div className="card card-statistics">
          <div className="card-body">
            <div className="clearfix">
              <div className="float-left">
                <i className="mdi mdi-account-box-multiple text-info icon-lg"></i>
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
                  Yearly Donations
                </p>
                <div className="fluid-container">
                  <h3
                    className="font-weight-medium text-right mb-0"
                    style={{ color: "darkgreen" }}
                  >
                    {new Intl.NumberFormat("en-IN", {
                      style: "currency",
                      currency: "KWD",
                    }).format(donationBasketStore.total_year)}
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
    );
  }
}

export default observer(YearlyCard);
