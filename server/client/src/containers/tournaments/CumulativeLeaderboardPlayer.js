import React, { Component } from "react";

export class CumulativeLeaderboardPlayer extends Component {
  renderPlayer() {
    if (this.props.player.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { player, cumulative, position } = this.props;

      const zeroToEven = round => {
        if (round === 0) {
          return "E";
        } else return round;
      };

      return (
        <React.Fragment>
          <div className="position">{position}</div>
          <div className="player">
            {player.firstName.charAt(0)}. {player.lastName}
          </div>
          <div className="score">{zeroToEven(player.cumulative)}</div>
        </React.Fragment>
      );
    }
  }

  render() {
    return <React.Fragment>{this.renderPlayer()}</React.Fragment>;
  }
}

export default CumulativeLeaderboardPlayer;
