import { GET_PLAYERS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case GET_PLAYERS:
      console.log("FROM PLAYERREDUCER", action.payload.data);

      let getScoreForGolferInRoundInTournament = (
        golfer,
        round,
        tournament,
        par
      ) => {
        /***********************************************************
         * IF if player is active, and not cut
         * ELSE if play has been cut
         ***********************************************************/
        if (golfer.tournaments[tournament].status == "active") {
          /***********************************************************
           * IF "current_round" is the same as "today", use "today"
           * ELSE use "round"x and minus from par.
           ***********************************************************/
          if (golfer.tournaments[tournament].current_round == round) {
            const roundFormattedToIncomingData = "round" + round;
            //commented out the below code 5/17 because players' scores who were
            //still on the course was coming back as an empty string.

            // if (
            //   golfer.tournaments[tournament].scores[
            //     roundFormattedToIncomingData
            //   ] === null
            // ) {
            //   golfer.tournaments[tournament].today = "";
            // } else {

            golfer.tournaments[tournament].scores[
              roundFormattedToIncomingData
            ] = parseInt(golfer.tournaments[tournament].today);

            return parseInt(golfer.tournaments[tournament].today);
            // }
          } else {
            const roundFormattedToIncomingData = "round" + round;
            let scoreForSpecificRound = null;

            if (
              golfer.tournaments[tournament].scores[
                roundFormattedToIncomingData
              ] === null
            ) {
              scoreForSpecificRound = "";
            } else {
              scoreForSpecificRound =
                parseInt(
                  golfer.tournaments[tournament].scores[
                    roundFormattedToIncomingData
                  ]
                ) - par;
            }

            golfer.tournaments[tournament].scores[
              roundFormattedToIncomingData
            ] = scoreForSpecificRound;
            return scoreForSpecificRound;
          }
        } else {
          /***********************************************************
           * IF "current_round" is the same as "today", use "today"
           * ELSE use "round"x and minus from par.
           ***********************************************************/
          if (golfer.tournaments[tournament].current_round == round) {
            const roundFormattedToIncomingData = "round" + round;

            if (
              golfer.tournaments[tournament].scores[
                roundFormattedToIncomingData
              ] === null
            ) {
              golfer.tournaments[tournament].today = 100;
            } else {
              golfer.tournaments[tournament].scores[
                roundFormattedToIncomingData
              ] = parseInt(golfer.tournaments[tournament].today);

              return parseInt(golfer.tournaments[tournament].today);
            }
          } else {
            const roundFormattedToIncomingData = "round" + round;
            let scoreForSpecificRound = null;

            if (
              golfer.tournaments[tournament].scores[
                roundFormattedToIncomingData
              ] === null
            ) {
              scoreForSpecificRound = 100;
            } else {
              scoreForSpecificRound =
                parseInt(
                  golfer.tournaments[tournament].scores[
                    roundFormattedToIncomingData
                  ]
                ) - par;
            }

            golfer.tournaments[tournament].scores[
              roundFormattedToIncomingData
            ] = scoreForSpecificRound;
            return scoreForSpecificRound;
          }
        }
      };

      let getScoreForPlayerInTournament = (player, par, tournament) => {
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
              tournament,
              par
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
          72,
          "masters"
        );
        player.scoresByRound.open = getScoreForPlayerInTournament(
          player,
          72,
          "open"
        );
        player.scoresByRound.pga = getScoreForPlayerInTournament(
          player,
          70,
          "pga"
        );
        player.scoresByRound.usopen = getScoreForPlayerInTournament(
          player,
          71,
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
