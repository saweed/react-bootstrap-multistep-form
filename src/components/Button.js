import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next Step"
      />
    );
  }
}
