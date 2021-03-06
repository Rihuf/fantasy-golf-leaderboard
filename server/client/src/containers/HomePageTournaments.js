import React, { Component } from "react";
import { connect } from "react-redux";
import HomePageTournamentBlock from "./TournamentBlock";
import CumulativeBlock from "./CumulativeBlock";

export class HomePageTournaments extends Component {
  routeOnClick() {}

  renderBlocks() {
    if (this.props.assets.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { assets } = this.props;
      return assets.map(index => {
        const link = `/${index.tournament}`;
        return (
          <a href={link} className="homepage-tournament-links noSelect">
            <HomePageTournamentBlock tournament={index} />
          </a>
        );
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderBlocks()}
        {/* <a href={`/cumulative`} className="homepage-tournament-links noSelect"> */}
        <CumulativeBlock />
        {/* </a> */}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { assets: state.assets };
};

export default connect(mapStateToProps)(HomePageTournaments);
