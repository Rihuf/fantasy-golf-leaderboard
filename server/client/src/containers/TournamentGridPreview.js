import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlayers } from "../actions/players";
import GridPreviewPlayer from "./GridPreviewPlayer";

export class TournamentGridPreview extends Component {
  //on page load, go get the players
  componentDidMount() {
    this.props.getPlayers(6);
  }

  renderLeaderboard() {
    if (this.props.players.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { tournament } = this.props.tournament;
      const { players } = this.props;
      // console.log(this.props);
      return players.map(index => {
        return <GridPreviewPlayer player={index} tournament={tournament} />;
      });
    }
  }

  render() {
    // const { leaderboard } = this.props.tournament;
    return (
      <React.Fragment>
        <div className="home-page-tournament-leaderboard">
          <div className="grid">{this.renderLeaderboard()}</div>
        </div>
      </React.Fragment>
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
)(TournamentGridPreview);
