import React, { Component } from "react";

export default class PaymentInfo extends Component {
  render() {
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title">Payment Information</h2>
          <div className="radio-group">
            <div className="radio" data-value="credit">
              <img
                src="https://i.imgur.com/XzOzVHZ.jpg"
                width="200px"
                height="100px"
              />
            </div>
            <div className="radio" data-value="paypal">
              <img
                src="https://i.imgur.com/jXjwZlj.jpg"
                width="200px"
                height="100px"
              />
            </div>
            <br />
          </div>
          <label className="pay">Card Holder Name*</label>
          <input type="text" name="holdername" placeholder="" />
          <div className="row">
            <div className="col-9">
              <label className="pay">Card Number*</label>
              <input type="text" name="cardno" placeholder="" />
            </div>
            <div className="col-3">
              <label className="pay">CVC*</label>
              <input type="password" name="cvcpwd" placeholder="***" />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label className="pay">Expiry Date*</label>
            </div>
            <div className="col-9">
              <select className="list-dt" id="month" name="expmonth">
                <option defaultValue>Month</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
              <select className="list-dt" id="year" name="expyear">
                <option defaultValue>Year</option>
              </select>
            </div>
          </div>
        </div>
        <input
          type="button"
          name="previous"
          className="previous action-button-previous"
          value="Previous"
        />
        <input
          type="button"
          name="make_payment"
          className="next action-button"
          value="Confirm"
        />
      </fieldset>
    );
  }
}
