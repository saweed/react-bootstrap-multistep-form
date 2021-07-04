import React, { Component } from "react";

export default class Progressbar extends Component {
  render() {
    return (
      <ul id="progressbar">
        <li className="active" id="account">
          <strong>Account</strong>
        </li>
        <li id="personal">
          <strong>Personal</strong>
        </li>
        <li id="payment">
          <strong>Payment</strong>
        </li>
        <li id="confirm">
          <strong>Finish</strong>
        </li>
      </ul>
    );
  }
}
