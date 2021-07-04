import React, { Component } from "react";
import Button from "./Button";

export default class AccountInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title">Account Information</h2>
          <input
            type="email"
            name="email"
            placeholder="Email Id"
            onChange={handleChange("email")}
            value={values.email}
          />
          <input
            type="text"
            name="username"
            placeholder="UserName"
            onChange={handleChange("username")}
            value={values.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange("password")}
            value={values.password}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange("confirmPassword")}
            value={values.confirmPassword}
          />
        </div>
        <Button btnClicked={this.continue} text="Next Step" />
      </fieldset>
    );
  }
}
