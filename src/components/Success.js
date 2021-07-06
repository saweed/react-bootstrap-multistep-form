import React, { Component } from "react";

export default class Success extends Component {
  render() {
    const { values } = this.props;
    return (
      <fieldset>
        <div className="form-card">
          <h2 className="fs-title text-center">Success !</h2> <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-3">
              <img
                src="https://img.icons8.com/color/96/000000/ok--v2.png"
                className="fit-image"
              />
            </div>
          </div>
          <br />
          <br />
          <div className="row justify-content-center">
            <div className="col-7 text-center">
              <h5>You Have Successfully Signed Up</h5>
              <ul className="list-group list-group-flush">
                {
                  Object.keys(values).map((item, i) => (
                    <li key={i} className="list-group-item"> {item} {'=>'} {values[item]} </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </fieldset>
    );
  }
}
