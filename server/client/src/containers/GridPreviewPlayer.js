import React, { Component } from "react";

export class GridPreviewPlayer extends Component {
  render() {
    const { player } = this.props;
    console.log(player);
    return (
      <React.Fragment>
        <div className="position">{player.position}</div>
        <div className="player">{player.name}</div>
        <div className="score">{player.score}</div>
      </React.Fragment>
    );
  }
}

export default GridPreviewPlayer;
