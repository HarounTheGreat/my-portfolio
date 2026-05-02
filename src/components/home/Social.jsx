import React from "react";
import "./social.css";
const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/haroun-bouriga-2167a2196/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Haroun Bouriga on LinkedIn"
      >
        <i className="bx bxl-linkedin" aria-hidden="true"></i>
      </a>

      <a
        href="https://github.com/HarounTheGreat"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Haroun Bouriga on GitHub"
      >
        <i className="uil uil-github-alt" aria-hidden="true"></i>
      </a>

      <a
        href="https://www.facebook.com/haroun.bouriga.75/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
        aria-label="Visit Haroun Bouriga on Facebook"
      >
        <i className="uil uil-facebook" aria-hidden="true"></i>
      </a>
    </div>
  );
};

export default Social;
