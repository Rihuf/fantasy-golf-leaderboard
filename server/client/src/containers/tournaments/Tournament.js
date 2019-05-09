import React, { Component } from "react";
import TournamentHeader from "./TournamentHeader";
import Leaderboard from "./Leaderboard";

export class Tournament extends Component {
  render() {
    const { tournament } = this.props;
    return (
      <React.Fragment>
        <TournamentHeader tournament={tournament} />
        <div className="leaderboard-header-container">
          <div className="favorite">c</div>
          <div className="position">Pos</div>
          <div className="name">Player</div>
          <div className="score">Total</div>
        </div>
        <Leaderboard />
      </React.Fragment>
    );
  }
}

export default Tournament;
