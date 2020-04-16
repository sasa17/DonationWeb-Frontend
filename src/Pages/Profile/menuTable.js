import React, { Component } from "react";
import { observer } from "mobx-react";

// Stores
import menuStore from "../../Stores/menuStore";
import donationBasketStore from "../../Stores/donationBasketStore";

// Components
import MenuItem from "./menuItem";

class MenuTable extends Component {
  render() {
    const items = menuStore.menu.map((item) => (
      <MenuItem menu={item} key={item.id} />
    ));
    const handleSave = () => {
      donationBasketStore.createDonationBasket();
    };
    return (
      <div className="col-md-8 col-md-pull-4">
        <table className="mt-3 table">
          <thead>
            <tr>
              <th
                style={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Meal
              </th>
              <th
                style={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Quantity available
              </th>
              <th
                style={{
                  color: "darkgreen",
                  fontWeight: "bold",
                  fontSize: 18,
                }}
              >
                Submit
              </th>
            </tr>
          </thead>
          <tbody>{items}</tbody>
        </table>
        <button
          className="btn rounded col"
          style={{ backgroundColor: "darkgreen", color: "snow" }}
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    );
  }
}

export default observer(MenuTable);
