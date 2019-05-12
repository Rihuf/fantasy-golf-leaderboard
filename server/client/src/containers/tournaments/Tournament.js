import React, { Component } from "react";
import { connect } from "react-redux";
import TournamentHeader from "./TournamentHeader";
import Leaderboard from "./Leaderboard";

export class Tournament extends Component {
  renderHeader() {
    if (this.props.assets.length === 0) {
      return <div>Loading...</div>;
    } else {
      const tourny = this.props.match.params.tournament;
      const { assets } = this.props;
      return assets.map(index => {
        if (index.tournament == tourny)
          return <TournamentHeader tournament={index} />;
      });
    }
  }

  render() {
    const tournament = this.props.match.params.tournament;
    return (
      <React.Fragment>
        {this.renderHeader()}
        <div className="leaderboard-header-container">
          <div className="favorite">c</div>
          <div className="position">Pos</div>
          <div className="name">Player</div>
          <div className="score">Total</div>
        </div>
        <Leaderboard tournament={tournament} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { assets: state.assets };
};

export default connect(mapStateToProps)(Tournament);
