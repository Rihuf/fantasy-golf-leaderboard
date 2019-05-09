import React, { Component } from "react";

export class GolferCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="golfer-container">
          <div className="name">P. Mickelson</div>
          <div className="round1">2</div>
          <div className="round2">-4</div>
          <div className="round3">-3</div>
          <div className="round4">-6</div>
          <div className="hole">14</div>
        </div>
      </React.Fragment>
    );
  }
}

export default GolferCard;
