import React, { Component } from "react";
import menuStore from "../stores/menuStore";
// import { Link } from "react-router-dom";

class MenuItem extends Component {
  state = {
    quantity: 0,
  };
  render() {
    if (this.state.quantity < 0) {
      alert("Please enter a valid number");
      this.setState({ quantity: this.state.quantity + 1 });
    }
    const handleToggleAdd = () => {
      let quantity = this.state.quantity;
      this.setState({ quantity: (quantity += 1) });
    };
    const handleToggleSubtract = () => {
      let quantity = this.state.quantity;
      this.setState({ quantity: (quantity -= 1) });
    };
    const handleAddItem = () => {
      menuStore.updateMenuItem(this.props.menu, this.state.quantity);
    };

    return (
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item" style={{ color: "darkgreen" }}>
            {this.props.menu.name}
            <button
              type="button"
              className="btn btn-success ml-5 mr-2"
              onClick={handleToggleAdd}
            >
              +{" "}
            </button>
            <input
              className="center"
              style={{ width: "120px" }}
              type="text"
              value={this.state.quantity}
              onChange={(event) =>
                this.setState({ quantity: Number(event.target.value) })
              }
            />
            <button
              type="button"
              className="btn btn-danger mr-5 ml-2"
              onClick={handleToggleSubtract}
            >
              -{" "}
            </button>
            <button
              type="button"
              className="btn btn-sucess right ml-5"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default MenuItem;
