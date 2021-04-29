import React from "react";
import { MiniCalender } from "../mini-calender/mini-calender";
import "./toolbar.scss";

export class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      price: {
        minPrice: 1,
        maxPrice: 10,
      },
      distance: {
        min: 1,
        max: 3,
      },
      showPriceForm: false,
      showDistanceForm: false,
    };
  }

  changePrice() {
    this.setState({ showPriceForm: !this.state.showPriceForm });
  }

  changeDistance() {
    this.setState({ showDistanceForm: !this.state.showDistanceForm });
  }

  handleInputChange(event, name, field) {
    const data = this.state[field];
    data[name] = event.target.value;
    this.setState({ [field]: data });
  }
  render() {
    const priceForm = () => {
      if (this.state.showPriceForm) {
        return (
          <div className="dialog">
            <div className="form-control">
              <label>Min Price</label>
              <input
                value={this.state.price.minPrice}
                onChange={(e) => this.handleInputChange(e, "minPrice", "price")}
                type="number"
              ></input>
            </div>
            <div className="form-control">
              <label>Max Price</label>
              <input
                value={this.state.price.maxPrice}
                onChange={(e) => this.handleInputChange(e, "maxPrice", "price")}
                type="number"
              ></input>
            </div>
            <div className="form-control">
              <button
                onClick={() => {
                  this.changePrice();
                }}
                className="submit"
              >
                Apply
              </button>
              <button
                onClick={() => {
                  this.changePrice();
                }}
                className="cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        );
      } else {
        return "";
      }
    };
    const distanceForm = () => {
      if (this.state.showDistanceForm) {
        return (
          <div className="dialog distance">
            <div className="form-control">
              <label>Min Distance</label>
              <input
                value={this.state.distance.min}
                onChange={(e) => this.handleInputChange(e, "min", "distance")}
                type="number"
              ></input>
            </div>
            <div className="form-control">
              <label>Max Distance</label>
              <input
                value={this.state.distance.max}
                onChange={(e) => this.handleInputChange(e, "max", "distance")}
                type="number"
              ></input>
            </div>
            <div className="form-control">
              <button
                onClick={() => {
                  this.changeDistance();
                }}
                className="submit"
              >
                Apply
              </button>
              <button
                onClick={() => {
                  this.changeDistance();
                }}
                className="cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        );
      } else {
        return "";
      }
    };

    return (
      <div className="toolbar">
        <div
          onClick={() => {
            this.changePrice();
          }}
          className="mini-card price-range clickable"
        >
          <p>Price</p>
          <h6>
            ${" "}
            <span>
              {this.state.price.minPrice} - {this.state.price.maxPrice}
            </span>
          </h6>
        </div>
        <div className="mini-card calender-range">
          <MiniCalender />
        </div>
        <div
          onClick={() => {
            this.changeDistance();
          }}
          className="mini-card area-range clickable"
        >
          <p>Distance</p>
          <h6>
            KM{" "}
            <span>
              {this.state.distance.min} - {this.state.distance.max}
            </span>
          </h6>
        </div>
        {priceForm()}
        {distanceForm()}
      </div>
    );
  }
}
