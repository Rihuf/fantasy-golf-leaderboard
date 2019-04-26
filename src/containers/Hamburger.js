import React, { Component } from "react";

export class Hamburger extends Component {
  render() {
    return (
      <div
        className={`hamburger ${this.props.isActive ? "show-menu" : ""}`}
        onClick={this.props.hamburgerClick}
      >
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </div>
    );
  }
}

export default Hamburger;
