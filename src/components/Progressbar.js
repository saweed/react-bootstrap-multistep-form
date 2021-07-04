import React, { Component } from "react";

export default class Progressbar extends Component {
  render() {
    const { step } = this.props;
    return (
      <ul id="progressbar">
        <li className={step >= 1 ? 'active' : ''} id="account">
          <strong>Account</strong>
        </li>
        <li id="personal" className={step >= 2 ? 'active' : ''} >
          <strong>Personal</strong>
        </li>
        <li id="payment" className={step >= 3 ? 'active' : ''}>
          <strong>Payment</strong>
        </li>
        <li id="confirm" className={step === 4 ? 'active' : ''}>
          <strong>Finish</strong>
        </li>
      </ul>
    );
  }
}
