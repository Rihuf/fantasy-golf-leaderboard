import React from "react";

export default function About() {
  return (
    <React.Fragment>
      <div className="about-header">
        <div className="about-header-text">About</div>
      </div>
      <div className="about-body-container">
        <div className="about-body-text">
          The Salisbury Open is a fantasy golf game played by a large group of
          friends of friends. <br />
          <br />
          The game revolves around each player choosing 10 professional golfers
          to fill out their team for each of the four annual majors. <br />
          <br />
          <br />
          <span className="rules-break">rules</span>
          <br />
          <br />
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
          <br />
          <br />
          DISCLAIMER: All scores on this site are subject to validation.
          {/* Head over to the{" "}
          <a href="/rules" className="about-rules-link">
            Rules and FAQ{" "}
          </a>{" "}
          page to learn more. */}
        </div>
      </div>
    </React.Fragment>
  );
}
