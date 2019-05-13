import React, { Component } from "react";

export class TournamentHeader extends Component {
  render() {
    const { tournament } = this.props;
    return (
      <React.Fragment>
        <div
          className="tournament-header-container"
          style={{ background: tournament.color }}
        >
          <img src={tournament.src} width="150px" />
          <div className="tournament-header-text"> {tournament.round} </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TournamentHeader;
