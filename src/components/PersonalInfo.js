import React, { Component } from "react";

export default class PersonalInfo extends Component {
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
        <input
          type="button"
          name="previous"
          className="previous action-button-previous"
          value="Previous"
        />
        <input
          type="button"
          name="next"
          className="next action-button"
          value="Next Step"
        />
      </fieldset>
    );
  }
}
