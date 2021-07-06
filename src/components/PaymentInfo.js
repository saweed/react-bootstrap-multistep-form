import React, { Component } from "react";
import Button from "./Button";

export default class PaymentInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleMathodChange = (event) => {
    this.props.paymentMethodChange(event.target.parentNode.getAttribute('data-value'))
  }
  
  render() {
    const { values, handleChange } = this.props;
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title">Payment Information</h2>
          <div className="radio-group">
            <div className={values.paymentMethod === 'credit' ? 'radio selected' : 'radio'}  data-value="credit" onClick={(e) => this.handleMathodChange(e)}>
              <img
                src="https://i.imgur.com/XzOzVHZ.jpg"
                width="200px"
                height="100px"
              />
            </div>
            <div className={values.paymentMethod === 'paypal' ? 'radio selected' : 'radio'}  data-value="paypal" onClick={(e) => this.handleMathodChange(e)}>
              <img
                src="https://i.imgur.com/jXjwZlj.jpg"
                width="200px"
                height="100px"
              />
            </div>
            <br />
          </div>
          <label className="pay">Card Holder Name*</label>
          <input type="text" name="holdername" placeholder="" onChange={handleChange('holdername')} value={values.holdername} />
          <div className="row">
            <div className="col-9">
              <label className="pay">Card Number*</label>
              <input type="text" name="cardno" placeholder="" onChange={handleChange('cardno')} value={values.cardno} />
            </div>
            <div className="col-3">
              <label className="pay">CVC*</label>
              <input type="password" name="cvcpwd" placeholder="***" onChange={handleChange('cvcpwd')} value={values.cvcpwd} />
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
        <Button btnClicked={this.back} text="Prev Step" />
        <Button btnClicked={this.continue} text="Confirm"/>
      </fieldset>
    );
  }
}
