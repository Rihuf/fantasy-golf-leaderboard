import React, { Component } from "react";
import GolferCard from "./GolferCard";
import TeamSums from "./TeamSums";

export class TeamCard extends Component {
  state = {
    scoreTotals: {}
  };

  componentDidMount() {
    this.calculateScores();
  }

  sortScores() {}

  calculateScores() {
    if (this.props.team.length === 0) {
      return <div>Loading...</div>;
    } else {
      let scoreSum = {
        r1Scores: [],
        r2Scores: [],
        r3Scores: [],
        r4Scores: []
      };
      const { team, tournament } = this.props;
      return team.map(index => {
        if (index.tournaments[tournament]) {
          const targetMajor = index.tournaments[tournament];
          const round = "round" + targetMajor.current_round;
          let scores = {
            r1Total: 0,
            r2Total: 0,
            r3Total: 0,
            r4Total: 0,
            hole: targetMajor.thru
          };
          console.log(Object.keys(targetMajor.scores)[0]);
          if (Object.keys(targetMajor.scores)[0] == round) {
            scores.r1Total = parseInt(targetMajor.today);
            scoreSum.r1Scores.push(scores.r1Total);
          } else {
            scores.r1Total = parseInt(targetMajor.scores.round1) - 72;
            scoreSum.r1Scores.push(scores.r1Total);
          }
          if (Object.keys(targetMajor.scores)[1] == round) {
            scores.r2Total = parseInt(targetMajor.today);
            scoreSum.r2Scores.push(scores.r2Total);
          } else {
            scores.r2Total = 72 - parseInt(targetMajor.scores.round2);
            scoreSum.r2Scores.push(scores.r2Total);
          }
          if (Object.keys(targetMajor.scores)[2] == round) {
            scores.r3Total = parseInt(targetMajor.today);
            scoreSum.r3Scores.push(scores.r3Total);
          } else {
            scores.r3Total = 72 - parseInt(targetMajor.scores.round3);
            scoreSum.r3Scores.push(scores.r3Total);
          }
          if (Object.keys(targetMajor.scores)[3] == round) {
            scores.r4Total = parseInt(targetMajor.today);
            scoreSum.r4Scores.push(scores.r4Total);
          } else {
            scores.r4Total = 72 - parseInt(targetMajor.scores.round4);
            scoreSum.r4Scores.push(scores.r4Total);
          }
          this.setState({ scoreTotals: scoreSum }, () => {
            console.log("THIS IS STATE: ", this.state);
          });
        }
      });
    }
  }

  renderGolferCard() {
    if (this.props.team.length === 0) {
      return <div>Loading...</div>;
    } else {
      const { team, tournament } = this.props;
      return team.map(index => {
        if (index.tournaments[tournament]) {
          const targetMajor = index.tournaments[tournament];
          const round = "round" + targetMajor.current_round;
          let scores = {
            r1Total: 0,
            r2Total: 0,
            r3Total: 0,
            r4Total: 0,
            hole: targetMajor.thru
          };
          console.log(Object.keys(targetMajor.scores)[0]);
          if (Object.keys(targetMajor.scores)[0] == round) {
            scores.r1Total = parseInt(targetMajor.today);
          } else {
            scores.r1Total = parseInt(targetMajor.scores.round1) - 72;
          }
          if (Object.keys(targetMajor.scores)[1] == round) {
            scores.r2Total = parseInt(targetMajor.today);
          } else {
            scores.r2Total = 72 - parseInt(targetMajor.scores.round2);
          }
          if (Object.keys(targetMajor.scores)[2] == round) {
            scores.r3Total = parseInt(targetMajor.today);
          } else {
            scores.r3Total = 72 - parseInt(targetMajor.scores.round3);
          }
          if (Object.keys(targetMajor.scores)[3] == round) {
            scores.r4Total = parseInt(targetMajor.today);
          } else {
            scores.r4Total = 72 - parseInt(targetMajor.scores.round4);
          }
          return (
            <GolferCard
              golfer={index}
              tournament={tournament}
              scores={scores}
              key={index.golferId}
            />
          );
        }
      });
    }
  }

  render() {
    console.log("from TeamCard: ", this.props);
    const { isActive } = this.props;
    return (
      <div className={isActive ? "team-container show" : "team-container"}>
        <div className="team-header-container">
          <div className="name">Golfers</div>
          <div className="round1">R1</div>
          <div className="round2">R2</div>
          <div className="round3">R3</div>
          <div className="round4">R4</div>
          <div className="hole">H</div>
        </div>
        {this.renderGolferCard()}
        <TeamSums />
      </div>
    );
  }
}

export default TeamCard;
