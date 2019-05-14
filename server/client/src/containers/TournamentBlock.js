import React, { Component } from "react";
import TournamentGridPreview from "./TournamentGridPreview";

export class HomePageTournamentBlock extends Component {
  renderLeaderboardOrDates() {
    if (this.props.tournament.tournament.length == 0) {
      return <div>loading...</div>;
    } else if (this.props.tournament.tournament == "masters") {
      const { tournament } = this.props;
      return <TournamentGridPreview tournament={tournament} />;
    } else {
      const { tournament } = this.props;
      return (
        <div className="dates">
          <div className="start">{tournament.dateStart}</div>
          <div className="end">{tournament.dateEnd}</div>
        </div>
      );
    }
  }

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
          <img
            src={tournament.src}
            height="90px"
            style={{ maxWidth: "120px" }}
          />
        </div>
        {this.renderLeaderboardOrDates()}
      </div>
    );
  }
}

export default HomePageTournamentBlock;
