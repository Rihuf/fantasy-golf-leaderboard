import React, { Component } from "react";

export class GolferCard extends Component {
  render() {
    const { tournament, golfer } = this.props;
    const targetMajor = golfer.tournaments[tournament];
    console.log("from GolferCard: ", this.props);
    return (
      <React.Fragment>
        <div className="golfer-container">
          <div className="name">
            {golfer.firstName} {golfer.lastName}
          </div>
          <div className="round1">2</div>
          <div className="round2">-4</div>
          <div className="round3">-3</div>
          <div className="round4">-6</div>
          <div className="hole">{targetMajor.thru}</div>
        </div>
      </React.Fragment>
    );
  }
}

export default GolferCard;
