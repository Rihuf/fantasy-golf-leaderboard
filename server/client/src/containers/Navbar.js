import React, { Component } from "react";
import Hamburger from "./Hamburger.js";
import Menu from "./Menu.js";

export class Navbar extends Component {
  render() {
    const {
      showMenu,
      showTournaments,
      tournamentsMenuClose,
      hamburgerClick,
      tournamentsClick
    } = this.props;
    return (
      <header>
        <div
          className={`nav-bar ${showMenu ? "expand" : ""}`}
          onClick={tournamentsMenuClose}
        >
          <h1
            className={`header-text ${showMenu ? "hide-header-text" : ""}`}
            onClick={hamburgerClick}
          >
            The Salisbury Open
          </h1>
          <Hamburger isActive={showMenu} hamburgerClick={hamburgerClick} />
          <Menu
            isMenuActive={showMenu}
            isTournamentsActive={showTournaments}
            tournamentsClick={tournamentsClick}
          />
        </div>
      </header>
    );
  }
}

export default Navbar;
