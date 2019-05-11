import React, { Component } from "react";

export class GridPreviewPlayer extends Component {
  renderPlayer() {
    if (this.props.player.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { teams } = this.props.player;
      const { tournament } = this.props;
      return teams.map(index => {
        console.log("tournamentName: ", index.tournamentName);
        console.log("tournament: ", tournament);
        if (index.tournamentName === tournament) {
          console.log("hello");
          return (
            <React.Fragment>
              <div className="position">1</div>
              <div className="player">Finally</div>
              <div className="score">4</div>
            </React.Fragment>
          );
        }
      });
    }
  }

  render() {
    const { player } = this.props;
    console.log(player.teams);

    return (
      <React.Fragment>
        {this.renderPlayer()}
        {/* //   <div className="position">{player.position}</div>
      //   <div className="player">{player.name}</div>
      //   <div className="score">{player.score}</div> */}{" "}
      </React.Fragment>
    );
  }
}

export default GridPreviewPlayer;
