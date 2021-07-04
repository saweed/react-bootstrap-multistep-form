import React, { Component } from "react";
import Button from "./Button";

export default class PersonalInfo extends Component {

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title">Personal Information</h2>
          <input type="text" name="fname" placeholder="First Name" />
          <input type="text" name="lname" placeholder="Last Name" />
          <input type="text" name="phno" placeholder="Contact No." />
          <input
            type="text"
            name="phno_2"
            placeholder="Alternate Contact No."
          />
        </div>
        <Button btnClicked={this.back} text="Prev Step" />
        <Button btnClicked={this.continue} text="Next Step"/>
      </fieldset>
    );
  }
}
