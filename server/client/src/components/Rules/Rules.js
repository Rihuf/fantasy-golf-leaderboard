import React from "react";

export default function Rules() {
  return (
    <React.Fragment>
      <div className="about-header">
        <div className="about-header-text">rules</div>
      </div>
      <div className="about-body-container">
        <div className="about-body-text rules-font-change">
          <div className="rules-body-header" />
          For each major, the top 50 golfers in the world ranking will be
          seperated by their rank into 5 tiers of 10 golfers. <br />
          <br />
          Players must submit 2 golfers from each tier prior to the first tee
          time of the relative major. A player may choose to write in any golfer
          absent from the top 50. <br />
          <br />
          The sum of the 4 lowest scores of a player's 10 golfers will be that
          player's score for the round.
          <br />
          <br />
          Lowest 4 round total wins.
        </div>
      </div>
    </React.Fragment>
  );
}
