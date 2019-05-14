import React, { Component } from "react";

export class GridPreviewPlayer extends Component {
  renderPlayer() {
    if (this.props.player.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { teams } = this.props.player;
      const { tournament, player, position } = this.props;

      const zeroToEven = round => {
        if (round === 0) {
          return "E";
        } else return round;
      };

      return teams.map(index => {
        if (index.tournamentName === tournament) {
          return (
            <React.Fragment>
              <div className="position">{position}</div>
              <div className="player">
                {player.firstName.charAt(0)}. {player.lastName}
              </div>
              <div className="score">
                {zeroToEven(player.scoreTotals[tournament])}
              </div>
            </React.Fragment>
          );
        }
      });
    }
  }

  render() {
    return <React.Fragment>{this.renderPlayer()}</React.Fragment>;
  }
}

export default GridPreviewPlayer;
