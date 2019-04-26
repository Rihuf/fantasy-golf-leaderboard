import React, { Component } from "react";
import Hamburger from "./Hamburger.js";

export default class App extends Component {
  state = { showMenu: false };

  hamburgerClick = e => {
    console.log(this.state.showMenu);
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };

  render() {
    return (
      <header>
        <div className="nav-bar">
          <p className="header-text">The Salisbury Open</p>
          <Hamburger
            isActive={this.state.showMenu}
            hamburgerClick={this.hamburgerClick}
          />
        </div>
        <div className="menu">
          <ul className="menu-nav">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Tournaments
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Rules and FAQ
              </a>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
