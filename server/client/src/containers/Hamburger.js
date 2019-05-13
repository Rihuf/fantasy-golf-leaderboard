import React, { Component } from "react";

export class Hamburger extends Component {
  render() {
    //deconstruct the props for cleaner JSX
    const { isActive, hamburgerClick } = this.props;
    return (
      <div
        className={`hamburger noSelect ${isActive ? "show-menu" : ""}`}
        onClick={hamburgerClick}
      >
        <div className="hamburger-line" />
        <div className="hamburger-line" />
        <div className="hamburger-line" />
      </div>
    );
  }
}

export default Hamburger;
