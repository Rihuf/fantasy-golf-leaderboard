import React, { Component } from "react";

export class GolferCard extends Component {
  render() {
    const { golfer, scores } = this.props;
    // console.log("from GolferCard round1: ", scores);
    return (
      <React.Fragment>
        <div className="golfer-container">
          <div className="name">
            {golfer.firstName} {golfer.lastName}
          </div>
          <div className="round1">{scores.r1Total}</div>
          <div className="round2">{scores.r2Total}</div>
          <div className="round3">{scores.r3Total}</div>
          <div className="round4">{scores.r4Total}</div>
          <div className="hole">{scores.hole}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default GolferCard;
