import React, { Component } from "react";
import CumulativeLeaderboard from "./CumulativeLeaderboard";

export class Cumulative extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          className="tournament-header-container"
          style={{ background: "#1e1e1e" }}
        >
          <div
            className="tournament-header-text"
            style={{
              fontFamily: `"Roboto", sans-serif`,
              fontSize: "2rem",
              color: "#303030",
              fontWeight: "500"
            }}
          >
            {" "}
            Cumulative{" "}
          </div>
        </div>
        <div className="leaderboard-header-container">
          <div className="position">Pos</div>
          <div className="name">Player</div>
          <div className="score">Total</div>
        </div>
        <CumulativeLeaderboard />
        <div className="leaderboard-footer-container">
          <div className="position">Pos</div>
          <div className="name">Player</div>
          <div className="score">Total</div>
        </div>
      </React.Fragment>
    );
  }
}

export default Cumulative;
