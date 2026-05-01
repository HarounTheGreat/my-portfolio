import React from "react";
import "./qualifications.css";

const Education = () => {
  return (
    <section className="qualification section" id="education">
      <h2 className="section__title">Education</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container qualification__container--timeline container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Software Engineering Diploma
                </h3>
                <span className="qualification__subtitle">
                  EPI (International Multidisciplinary School)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 09/2021 - 06/2024
                </div>
                <span className="qualification__subtitle">
                  Focus: Software development, architecture, systems
                  engineering
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  Bachelor’s Degree in Computer Networks
                </h3>
                <span className="qualification__subtitle">
                  ISITCOM (Higher Institute of Computer Science and
                  Communication Techniques)
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 09/2018 - 06/2021
                </div>
                <span className="qualification__subtitle">
                  Focus: Computer networks, telecommunications, computer
                  science fundamentals
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
