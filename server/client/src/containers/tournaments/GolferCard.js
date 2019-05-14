import React, { Component } from "react";

export class GolferCard extends Component {
  renderScores(round) {
    if (this.props.scores.length === 0) {
      return <div>Loading...</div>;
    } else {
      if (round === 0) {
        return "E";
      } else if (round == 100) {
        return "cut";
      } else return round;
    }
  }

  renderHole() {
    const { golfer, tournament } = this.props;
    if (golfer.tournaments[tournament].thru == 18) {
      return "F";
    } else return golfer.tournaments[tournament].thru;
  }

  render() {
    const { golfer, scores } = this.props;
    // console.log("from GolferCard round1: ", scores);
    return (
      <React.Fragment>
        <div className="golfer-container">
          <div className="name">
            {golfer.firstName} {golfer.lastName}
          </div>
          <div className="round1">{this.renderScores(scores.round1)}</div>
          <div className="round2">{this.renderScores(scores.round2)}</div>
          <div className="round3">{this.renderScores(scores.round3)}</div>
          <div className="round4">{this.renderScores(scores.round4)}</div>
          <div className="hole">{this.renderHole()}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default GolferCard;
