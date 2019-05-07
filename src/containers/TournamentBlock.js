import React, { Component } from "react";
import TournamentGridPreview from "./TournamentGridPreview";

export class HomePageTournamentBlock extends Component {
  render() {
    const { tournament } = this.props;
    return (
      <div
        className="home-page-tournament-container"
        style={{
          background: tournament.color,
          borderBottom: "2px solid #e9cab4"
        }}
      >
        <div className="home-page-tournament-branding">
          <img src={tournament.src} height="100" />
        </div>
        <TournamentGridPreview tournament={tournament} />
      </div>
    );
  }
}

export default HomePageTournamentBlock;
