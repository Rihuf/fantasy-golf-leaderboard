import React, { Component } from "react";
import Hamburger from "./Hamburger.js";
import Menu from "./Menu.js";

export default class App extends Component {
  state = { showMenu: false, showTournaments: false };

  hamburgerClick = e => {
    console.log(this.state.showMenu);
    if (!this.state.showMenu) {
      this.setState({ showMenu: true });
    } else {
      this.setState({ showMenu: false });
    }
  };

  tournamentsClick = e => {
    console.log(this.state.showTournaments);
    if (!this.state.showTournaments) {
      this.setState({ showTournaments: true });
    } else {
      this.setState({ showTournaments: false });
    }
  };

  render() {
    return (
      <header>
        <div className={`nav-bar ${this.state.showMenu ? "expand" : ""}`}>
          <h1
            className={`header-text ${
              this.state.showMenu ? "hide-header-text" : ""
            }`}
            onClick={this.hamburgerClick}
          >
            The Salisbury Open
          </h1>
          <Hamburger
            isActive={this.state.showMenu}
            hamburgerClick={this.hamburgerClick}
          />
          <Menu
            isMenuActive={this.state.showMenu}
            isTournamentsActive={this.state.showTournaments}
            tournamentsClick={this.tournamentsClick}
          />
        </div>
      </header>
    );
  }
}
