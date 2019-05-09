import React, { Component } from "react";

export class TeamSums extends Component {
  render() {
    return (
      <div className="team-sum-container">
        <div className="name">Round Totals</div>
        <div className="round1">R1</div>
        <div className="round2">R2</div>
        <div className="round3">R3</div>
        <div className="round4">R4</div>
        <div className="hole" />
      </div>
    );
  }
}

export default TeamSums;
