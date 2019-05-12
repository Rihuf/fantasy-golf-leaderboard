import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getPlayers } from "../../actions/players";
import PlayerCard from "./PlayerCard";

export class Leaderboard extends Component {
  //on page load, go get the players
  componentDidMount() {
    this.props.getPlayers(6);
  }

  renderLeaderboard() {
    if (this.props.players.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { players, tournament } = this.props;
      // console.log("params", this.props.params);
      return players.map(index => {
        return <PlayerCard player={index} tournament={tournament} />;
      });
    }
  }

  renderPlayers = () => {
    let array = [];
    for (let i = 0; i < 40; i++) {
      array.push(<PlayerCard key={i} />);
    }
    return array;
  };
  render() {
    return <React.Fragment>{this.renderLeaderboard()}</React.Fragment>;
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
)(Leaderboard);
