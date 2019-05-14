import React, { Component } from "react";

export class TeamSums extends Component {
  renderScores(round) {
    if (!this.props.tournament) {
      return <div>Loading...</div>;
    } else {
      if (round == 0) {
        return "E";
      } else return round;
    }
  }

  render() {
    const { player, tournament } = this.props;
    // console.log("SCOOOOOOOOOOOOOOOOORE: ", scores);
    return (
      <div className="team-sum-container">
        <div className="name">Round Totals</div>
        <div className="round1">
          {this.renderScores(player.scoresByRound[tournament][0])}
        </div>
        <div className="round2">
          {this.renderScores(player.scoresByRound[tournament][1])}
        </div>
        <div className="round3">
          {this.renderScores(player.scoresByRound[tournament][2])}
        </div>
        <div className="round4">
          {this.renderScores(player.scoresByRound[tournament][3])}
        </div>
        <div className="hole" />
      </div>
    );
  }
}

export default TeamSums;
