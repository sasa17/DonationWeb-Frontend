import React, { Component } from "react";
import { observer } from "mobx-react";

// Stores
import donationBasketStore from "../../Stores/donationBasketStore";

class MealsCard extends Component {
  render() {
    return (
      <div className="col-sm-4 ml-5 mt-5 mr-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h4
                  className="card-title mb-3"
                  style={{
                    fontSize: 20,
                    color: "darkgreen",
                    fontWeight: "bold",
                  }}
                >
                  Meals Donated
                </h4>
                <h1
                  className="mb-0"
                  style={{
                    fontSize: 18,
                    color: "darkgreen",
                    fontWeight: "bold",
                  }}
                >
                  {donationBasketStore.meals | 0} Meals
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default observer(MealsCard);
