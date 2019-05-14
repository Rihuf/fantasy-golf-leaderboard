import React, { Component } from "react";

export class Menu extends Component {
  render() {
    const { isMenuActive, isTournamentsActive, tournamentsClick } = this.props;

    return (
      <div className={`menu ${isMenuActive ? "show-menu" : ""}`}>
        <ul className="menu-nav">
          <li className="nav-item noSelect">
            <a href="/" className="nav-link noSelect">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <p className="tournament-li" onClick={tournamentsClick}>
              TOURNAMENTS
            </p>
          </li>
          <div
            className={`tournaments-nav-container ${
              isTournamentsActive && isMenuActive ? "show-tournaments" : ""
            } `}
          >
            <ul className="tournaments-nav">
              <li className="tournaments-nav-item masters-nav">
                <a href="/masters" className="tournament-nav-link noSelect">
                  MASTERS
                </a>
              </li>
              <li className="tournaments-nav-item pga-nav">
                <a href="/pga" className="tournament-nav-link noSelect">
                  PGA CHAMPIONSHIP
                </a>
              </li>

              <li className="tournaments-nav-item usopen-nav">
                <a href="/usopen" className="tournament-nav-link noSelect">
                  U.S. OPEN
                </a>
              </li>
              <li className="tournaments-nav-item open-nav">
                <a href="/open" className="tournament-nav-link noSelect">
                  THE OPEN
                </a>
              </li>
            </ul>
          </div>
          <li className="nav-item">
            <a href="/" className="nav-link noSelect">
              RULES & FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link noSelect">
              ABOUT
            </a>
          </li>
          <li className="nav-spacer" />
        </ul>
      </div>
    );
  }
}

export default Menu;
