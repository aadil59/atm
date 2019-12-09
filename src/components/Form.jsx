import React, { Component } from "react";
import Info from "./Info";

export class form extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.hanleClicked = this.hanleClicked.bind(this);
    this.state = {
      amount: "",
      counterObj: {},
      noteCounter: {}
    };
  }
  // TO INPUT VALUE
  handleChange = e => {
    e.preventDefault();
    const amount = e.target.validity.valid ? e.target.value : this.state.amount;
    this.setState({ amount });
  };
  hanleClicked = e => {
    setTimeout(() => {
      this.setState({
        noteCounter: this.countCurrency(this.state.amount)
      });
      // console.log(this.state.noteCounter);
      let currencYDataSet = {
        1: 0,
        2: 0,
        5: 0,
        10: 0,
        20: 0,
        50: 0,
        100: 0,
        200: 0,
        500: 0,
        2000: 0
      };
      this.state.noteCounter.map((item, index) => {
        if (currencYDataSet.hasOwnProperty(item)) {
          return (currencYDataSet[item] += 1);
        } else {
          return (currencYDataSet[item] = 1);
        }
      });
      this.setState({
        counterObj: currencYDataSet
      });
      // console.log(this.state.counterObj);
    }, 200);
  };
  countCurrency = amount => {
    let curr = [1, 2, 5, 10, 20, 50, 100, 200, 500, 2000];
    let i = curr.length - 1,
      withdraw = [];

    while (amount !== 0) {
      if (amount >= curr[i]) {
        withdraw.push(curr[i]);
        amount -= curr[i];
      }
      if (amount < curr[i]) {
        i--;
      }
    }
    return withdraw;
  };
  render() {
    const { amount } = this.state;
    const isEnabled = amount.length;
    return (
      <React.Fragment>
        <div className="col-md-6">
          <form className="form">
            <h3 className="text-center">Welcome to ATM</h3>
            <div className="form-group">
              <input
                type="text"
                pattern="[0-9]*"
                className={`form-control ${amount ? "float-label-up" : ""}`}
                value={amount}
                onChange={this.handleChange}
              />
              <label className="float-label">Enter the Amount</label>
              <button
                type="button"
                className="btn btn-primary btn-lg"
                onClick={this.hanleClicked}
                disabled={!isEnabled}
              >
                Get Money
              </button>
            </div>
          </form>
        </div>
        <Info details={this.state} />
      </React.Fragment>
    );
  }
}

export default form;
