import React from "react";
import sDrive_1 from "../../assets/anbester.jpg";
import sDrive_2 from "../../assets/anbester_1.jpg";
import "./personalProject.css";

const PersonalProject = () => {
  const video1Link =
    "https://drive.google.com/file/d/1rcq0fHewZRLpl5vnSCVDe96XPH_KxWEX/preview";
  const video2Link =
    "https://drive.google.com/file/d/1WEaUf4XhcrzUp8X1Q1OemLcRlYRvdQ2e/preview";

  return (
    <section className="personal-project">
      <h2 className="personal-project__title">
        AI-Driven Commercial Insights Platform
      </h2>
      <span className="personal-project__subtitle">
        AI Open Challenge 2022 Winning Project
      </span>

      <div className="personal-project__inner">
        <div className="personal-project__card">
          <h3 className="personal-project__headline">
            Built an AI-powered commercial insights platform based on original
            research and led it to 1st place nationally.
          </h3>

          <div className="personal-project__media-grid">
            <div className="personal-project__media-frame">
              <img
                src={sDrive_1}
                alt="Dashboard view from the AI-driven commercial insights platform"
                className="personal-project__media"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="personal-project__media-frame">
              <img
                src={sDrive_2}
                alt="Presentation material from the AI Open Challenge winning project"
                className="personal-project__media"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="personal-project__media-frame">
              <iframe
                src={video1Link}
                title="AI Open Challenge demo video 1"
                className="personal-project__iframe"
                allow="autoplay"
              />
            </div>

            <div className="personal-project__media-frame">
              <iframe
                src={video2Link}
                title="AI Open Challenge demo video 2"
                className="personal-project__iframe"
                allow="autoplay"
              />
            </div>
          </div>

          <div className="personal-project__details">
            <ul className="personal-project__list">
              <li className="personal-project__list-item">
                <strong>Team Formation & Leadership:</strong> Built and managed
                a dynamic team to tackle complex AI challenges.
              </li>
              <li className="personal-project__list-item">
                <strong>AI Open Challenge 2022 Winner:</strong> Led a team to
                1st place, showcasing innovation, problem-solving, and technical
                excellence.
              </li>
              <li className="personal-project__list-item">
                <strong>Tools Used:</strong> Next.js, Python, Power BI
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProject;
