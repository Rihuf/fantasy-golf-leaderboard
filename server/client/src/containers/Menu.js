import React, { Component } from "react";

export class Menu extends Component {
  render() {
    const { isMenuActive, isTournamentsActive, tournamentsClick } = this.props;

    return (
      <div className={`menu ${isMenuActive ? "show-menu" : ""}`}>
        <ul className="menu-nav">
          <li className="nav-item">
            <a href="/" className="nav-link">
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
                <a href="/masters" className="tournament-nav-link">
                  MASTERS
                </a>
              </li>
              <li className="tournaments-nav-item pga-nav">
                <a href="/pga" className="tournament-nav-link">
                  PGA CHAMPIONSHIP
                </a>
              </li>

              <li className="tournaments-nav-item usopen-nav">
                <a href="/usopen" className="tournament-nav-link">
                  U.S. OPEN
                </a>
              </li>
              <li className="tournaments-nav-item open-nav">
                <a href="/open" className="tournament-nav-link">
                  THE OPEN
                </a>
              </li>
            </ul>
          </div>
          <li className="nav-item">
            <a href="/" className="nav-link">
              RULES & FAQ
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
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
