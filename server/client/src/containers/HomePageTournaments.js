import React, { Component } from "react";
import HomePageTournamentBlock from "./TournamentBlock";

export class HomePageTournaments extends Component {
  render() {
    const { masters, pga, open, usOpen } = this.props.tournaments;
    return (
      <React.Fragment>
        <HomePageTournamentBlock tournament={masters} />
        <HomePageTournamentBlock tournament={pga} />
        <HomePageTournamentBlock tournament={open} />
        <HomePageTournamentBlock tournament={usOpen} />
      </React.Fragment>
    );
  }
}

export default HomePageTournaments;
