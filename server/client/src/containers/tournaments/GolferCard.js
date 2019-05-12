import React, { Component } from "react";

export class GolferCard extends Component {
  calculateScores() {
    const { tournament, golfer } = this.props;
    const targetMajor = golfer.tournaments[tournament];
    const round = "round" + targetMajor.current_round;
    let r1Total = 0;
    let r2Total = 0;
    let r3Total = 0;
    let r4Total = 0;
    console.log(Object.keys(targetMajor.scores)[0]);
    if (Object.keys(targetMajor.scores)[0] == round) {
      r1Total = targetMajor.today;
    } else r1Total = parseInt(targetMajor.scores.round1) - 72;
    if (Object.keys(targetMajor.scores)[1] == round) {
      r2Total = targetMajor.today;
    } else r2Total = 72 - parseInt(targetMajor.scores.round2);
    if (Object.keys(targetMajor.scores)[2] == round) {
      r3Total = targetMajor.today;
    } else r3Total = 72 - parseInt(targetMajor.scores.round3);
    if (Object.keys(targetMajor.scores)[3] == round) {
      r4Total = targetMajor.today;
    } else r4Total = 72 - parseInt(targetMajor.scores.round4);
    return {
      r1Total,
      r2Total,
      r3Total,
      r4Total
    };
  }

  render() {
    const { tournament, golfer } = this.props;
    const targetMajor = golfer.tournaments[tournament];
    console.log("from GolferCard: ", this.props);
    const scores = this.calculateScores();
    console.log("from GolferCard: ", scores);
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
          <div className="hole">{targetMajor.thru}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default GolferCard;
