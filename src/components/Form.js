import React, { Component } from "react";
import AccountInfo from "./AccountInfo";
import PaymentInfo from "./PaymentInfo";
import PersonalInfo from "./PersonalInfo";
import Progressbar from "./Progressbar";
import Success from "./Success";

export default class Form extends Component {
  state = {
    step: 1,
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    fname: '',
    lname: '',
    phno: '', 
    phno_2: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const { email, username, password, confirmPassword } = this.state;
    const values = { email, username, password, confirmPassword };
    return (
      <div className="row">
        <div className="col-md-12 mx-0">
          <form id="msform">
            {/* <!-- progressbar --> */}
            <Progressbar step={step} />
            {/* <!-- fieldsets --> */}
            {
              {
                1: (
                  <AccountInfo
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                ),
                2: (
                  <PersonalInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                ),
                3: (
                  <PaymentInfo
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    values={values}
                  />
                ),
                4: <Success />,
              }[step]
            }
          </form>
        </div>
      </div>
    );
  }
}
