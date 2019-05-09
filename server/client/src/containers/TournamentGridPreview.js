import React, { Component } from "react";
import GridPreviewPlayer from "./GridPreviewPlayer";

export class TournamentGridPreview extends Component {
  render() {
    const { leaderboard } = this.props.tournament;
    return (
      <React.Fragment>
        <div className="home-page-tournament-leaderboard">
          <div className="grid">
            {leaderboard.map(index => {
              return <GridPreviewPlayer player={index} />;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TournamentGridPreview;
