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
          Head over to the{" "}
          <a href="/rules" className="about-rules-link">
            Rules and FAQ{" "}
          </a>{" "}
          page to learn more.
        </div>
      </div>
    </React.Fragment>
  );
}
