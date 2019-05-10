import React, { Component } from "react";
import HomePageTournamentBlock from "./TournamentBlock";

export class HomePageTournaments extends Component {
  render() {
    const { masters, pga, usopen, open } = this.props.tournaments;
    return (
      <React.Fragment>
        <HomePageTournamentBlock tournament={masters} />
        <HomePageTournamentBlock tournament={pga} />
        <HomePageTournamentBlock tournament={usopen} />
        <HomePageTournamentBlock tournament={open} />
      </React.Fragment>
    );
  }
}

export default HomePageTournaments;
