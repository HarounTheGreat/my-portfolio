import React from "react";
import "./qualifications.css";

const Internships = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Internships</h2>
      <span className="section__subtitle">My Professional Training</span>

      <div className="qualification__container qualification__container--timeline container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Smarteo</h3>
                <span className="qualification__subtitle">
                  Software Engineering Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 12/2022 - 06/2023
                </div>
                <span className="qualification__subtitle">
                  Full-stack blood donation management platform for donor and
                  donation workflow management with analytics.
                  <br />
                  <strong>Tech Stack:</strong> MongoDB, Express.js, React,
                  Node.js, Power BI
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">SSH Engineering</h3>
                <span className="qualification__subtitle">
                  Software Engineering Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 06/2022 - 08/2022
                </div>
                <span className="qualification__subtitle">
                  Developed backend and frontend features and implemented form
                  validation for internal web applications.
                  <br />
                  <strong>Tech Stack:</strong> PHP, JavaScript
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">ITGATE-GROUP</h3>
                <span className="qualification__subtitle">
                  Software Engineering Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2021 - 05/2021
                </div>
                <span className="qualification__subtitle">
                  Built an NLP-based platform analyzing sentiment patterns in
                  social content.
                  <br />
                  <strong>Tech Stack:</strong> Python, Django
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
