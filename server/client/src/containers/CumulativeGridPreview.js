import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlayers } from "../actions/players";
import CumulativeGridPreviewPlayer from "./CumulativeGridPreviewPlayer";

export class CumulativeGridPreview extends Component {
  //on page load, go get the players
  componentDidMount() {
    this.props.getPlayers();
    setInterval(this.props.getPlayers, 30000);
  }

  renderLeaderboardPreview() {
    if (this.props.players.length === 0) {
      return null;
    } else {
      const { players } = this.props;
      //sum the player's scoresByRounad for this tournament
      players.forEach(player => {
        player.cumulative =
          parseInt(player.scoreTotals.masters) +
          parseInt(player.scoreTotals.pga) +
          parseInt(player.scoreTotals.usopen) +
          parseInt(player.scoreTotals.open);
      });
      //sort the players according to their scoresByRound for this tournament

      players.sort((a, b) => a.cumulative - b.cumulative);

      return players.map((p, index) => {
        if (index < 6) {
          return (
            <CumulativeGridPreviewPlayer player={p} position={index + 1} />
          );
        }
      });
    }
  }

  render() {
    return (
      <div>
        <React.Fragment>
          <div className="home-page-tournament-leaderboard">
            <div className="grid">{this.renderLeaderboardPreview()}</div>
          </div>
        </React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { players: state.players };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getPlayers }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CumulativeGridPreview);
