import React from "react";
import "./qualifications.css";

const Internships = () => {
  return (
    <section className="qualification section">
      <h2 className="section__title">Internships</h2>
      <span className="section__subtitle">My Professional Training</span>

      <div className="qualification__container container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            {/* Internship 1 */}
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Smarteo</h3>
                <span className="qualification__subtitle">
                  Software Engineering Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 12/2022 - 06/2023
                </div>
                <span className="qualification__subtitle">
                  Built a full-stack blood donation management platform that
                  led to a full-time conversion.
                  <br />
                  <strong>Tech Stack:</strong> MERN Stack, Power BI
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* Internship 2 */}
            <div className="qualification__data">
              <div></div>

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
                  Developed backend and frontend features, form validation, and
                  internal web application improvements.
                  <br />
                  <strong>Tech Stack:</strong> PHP, JavaScript
                </span>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">ITGATE-GROUP</h3>
                <span className="qualification__subtitle">
                  Software Engineering Intern
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 01/2021 - 05/2021
                </div>
                <span className="qualification__subtitle">
                  Built a social media sentiment analysis platform.
                  <br />
                  <strong>Tech Stack:</strong> Django, Python
                </span>
              </div>

              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internships;
