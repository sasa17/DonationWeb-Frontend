import React, { Component } from "react";

// Stores
import menuStore from "../../Stores/menuStore";

class MenuItem extends Component {
  state = {
    quantity: 0,
    update: false,
  };
  render() {
    if (this.state.quantity < 0) {
      alert("Minimum quantity reached");
      this.setState({ quantity: this.state.quantity + 1 });
    }
    const handleToggleAdd = () => {
      let quantity = this.state.quantity;
      this.setState({ quantity: (quantity += 1) });
      this.setState({ update: false });
    };
    const handleToggleSubtract = () => {
      let quantity = this.state.quantity;
      this.setState({ quantity: (quantity -= 1) });
      this.setState({ update: false });
    };
    const handleAddItem = () => {
      menuStore.updateMenuItem(this.props.menu, this.state.quantity);
      this.setState({ update: true });
    };

    return (
      <tr>
        <td style={{ color: "darkgreen", fontSize: 16 }}>
          {this.props.menu.name}
        </td>
        <td>
          <button
            type="button"
            className="btn"
            onClick={handleToggleSubtract}
            style={{ backgroundColor: "darkgreen" }}
          >
            -{" "}
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
            className="btn"
            onClick={handleToggleAdd}
            style={{ backgroundColor: "darkgreen" }}
          >
            +{" "}
          </button>
        </td>
        <td>
          <button
            type="button"
            className="btn"
            onClick={handleAddItem}
            style={{ backgroundColor: "darkgreen", color: "snow" }}
          >
            {this.state.update ? "Updated" : "Update"}
          </button>
        </td>
      </tr>
    );
  }
}

export default MenuItem;
