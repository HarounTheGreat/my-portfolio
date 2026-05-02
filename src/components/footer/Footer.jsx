import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Haroun Bouriga</h1>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/haroun-bouriga-2167a2196/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Haroun Bouriga on LinkedIn"
          >
            <i className="uil uil-linkedin" aria-hidden="true"></i>
          </a>

          <a
            href="https://github.com/HarounTheGreat"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Haroun Bouriga on GitHub"
          >
            <i className="uil uil-github-alt" aria-hidden="true"></i>
          </a>

          <a
            href="https://www.facebook.com/haroun.bouriga.75/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Haroun Bouriga on Facebook"
          >
            <i className="uil uil-facebook" aria-hidden="true"></i>
          </a>
        </div>

        <span className="footer__copy">&#169; Haroun. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
