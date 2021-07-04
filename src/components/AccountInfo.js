import React, { Component } from "react";
import Button from './Button'

export default class AccountInfo extends Component {
  render() {
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title">Account Information</h2>
          <input type="email" name="email" placeholder="Email Id" />
          <input type="text" name="uname" placeholder="UserName" />
          <input type="password" name="pwd" placeholder="Password" />
          <input type="password" name="cpwd" placeholder="Confirm Password" />
        </div>
        <Button />
      </fieldset>
    );
  }
}
