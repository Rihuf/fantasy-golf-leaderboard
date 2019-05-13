import React, { Component } from "react";

export class TeamSums extends Component {
  render() {
    const { scores } = this.props;
    // console.log("SCOOOOOOOOOOOOOOOOORE: ", scores);
    return (
      <div className="team-sum-container">
        <div className="name">Round Totals</div>
        <div className="round1">{scores.reducedR1}</div>
        <div className="round2">{scores.reducedR2}</div>
        <div className="round3">{scores.reducedR3}</div>
        <div className="round4">{scores.reducedR4}</div>
        <div className="hole" />
      </div>
    );
  }
}

export default TeamSums;
