import React, { Component } from "react";
import Button from "./Button";

export default class PersonalInfo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title">Personal Information</h2>
          <input 
            type="text" 
            name="fname" 
            placeholder="First Name"
            onChange={handleChange('fname')}
            value={values.fname}
           />
          <input 
            type="text" 
            name="lname" 
            placeholder="Last Name" 
            onChange={handleChange('lname')}
            value={values.lname}
          />
          <input 
            type="text" 
            name="phno" 
            placeholder="Contact No." 
            onChange={handleChange('phno')}
            value={values.phno}
          />
          <input
            type="text"
            name="phno_2"
            placeholder="Alternate Contact No."
            onChange={handleChange('phno_2')}
            value={values.phno_2}
          />
        </div>
        <Button btnClicked={this.back} text="Prev Step" />
        <Button btnClicked={this.continue} text="Next Step" />
      </fieldset>
    );
  }
}
