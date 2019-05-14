import { GET_PLAYERS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GET_PLAYERS:
      console.log("FROM PLAYERREDUCER", action.payload.data);

      let getScoreForGolferInRoundInTournament = (
        golfer,
        round,
        tournament
      ) => {
        if (golfer.tournaments[tournament].current_round == round) {
          const roundFormattedToIncomingData = "round" + round;
          golfer.tournaments[tournament].scores[
            roundFormattedToIncomingData
          ] = parseInt(golfer.tournaments[tournament].today);
          return parseInt(golfer.tournaments[tournament].today);
        } else {
          const roundFormattedToIncomingData = "round" + round;

          const scoreForSpecificRound =
            parseInt(
              golfer.tournaments[tournament].scores[
                roundFormattedToIncomingData
              ]
            ) - 72;

          golfer.tournaments[tournament].scores[
            roundFormattedToIncomingData
          ] = scoreForSpecificRound;
          return scoreForSpecificRound;
        }
      };

      let getScoreForPlayerInTournament = (player, tournament) => {
        // Look at each golfer in tournament
        let playerTeamForTournament = player.teams.find(team => {
          return team.tournamentName == tournament;
        });

        let allPlayerScoresForThisTournament = [];

        for (var round = 1; round <= 4; round++) {
          let allGolferScoresForThisRound = [];

          playerTeamForTournament.roster.forEach(golfer => {
            // Find the score for this golfer in round
            let golferScore = getScoreForGolferInRoundInTournament(
              golfer,
              round,
              tournament
            );

            allGolferScoresForThisRound.push(golferScore);
          });

          // Get total of the lowest scores in each round
          if (allGolferScoresForThisRound.length > 0) {
            allGolferScoresForThisRound.sort((a, b) => a - b);
            allGolferScoresForThisRound.splice(4, 6);

            //Sum those scores
            const playerScoreForThisRound = allGolferScoresForThisRound.reduce(
              (accumulator, currentValue) => accumulator + currentValue
            );

            //Push the sum for this round to the target array
            allPlayerScoresForThisTournament.push(playerScoreForThisRound);
          }
        }

        return allPlayerScoresForThisTournament;
      };

      // For each player in response get total score for all golfers in each tournament
      let playerScoresForAllTournaments = action.payload.data.map(player => {
        player.scoresByRound.masters = getScoreForPlayerInTournament(
          player,
          "masters"
        );
        player.scoresByRound.open = getScoreForPlayerInTournament(
          player,
          "open"
        );
        player.scoresByRound.pga = getScoreForPlayerInTournament(player, "pga");
        player.scoresByRound.usopen = getScoreForPlayerInTournament(
          player,
          "usopen"
        );
        return player;
      });

      // Add list of players to state for rendering

      return action.payload.data;
    default:
      return state;
  }
}
