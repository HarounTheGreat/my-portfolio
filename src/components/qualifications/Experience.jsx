import React from "react";
import "./qualifications.css";

const Experience = () => {
  return (
    <section className="qualification section" id="experience">
      {/* <h2 className="section__title">
        Experience
      </h2> */}
      <h2 className="section__title">Software Engineer at Smarteo</h2>
      <span className="section__subtitle">
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt"></i> 06/2023 - Present
        </div>
      </span>
      <div className="qualification__container qualification__container--timeline container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Taxiora ERP</h3>
                <span className="qualification__subtitle">
                  Built the ERP interface and backend systems for drivers,
                  taxis, invoices, pricing, stock, payments, and client
                  operations.
                  <br />
                  <strong>Tech Stack:</strong> React.js (Redux, Zod,
                  TypeScript), PHP (Symfony), PostgreSQL
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Taxiora Booking</h3>
                <span className="qualification__subtitle">
                  Real-time booking backend connecting mobile apps and smart
                  taximeters with fleet tracking, matching, and fare
                  estimation.
                  <br />
                  <strong>Tech Stack:</strong> Node.js, Redis, MongoDB,
                  PostgreSQL, Geocoding APIs, Python, Docker
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">
                  AMR Dashboard monitoring
                </h3>
                <span className="qualification__subtitle">
                  Real-time monitoring and control dashboard for an autonomous
                  mobile robot fleet on an industrial factory floor.
                  <br />
                  <strong>Tech Stack:</strong> React.js, Node.js, PostgreSQL,
                  ROS, Gazebo
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">Jobzioo Backoffice</h3>
                <span className="qualification__subtitle">
                  Internal job management system for candidate tracking, job
                  placement, demand management, and reporting.
                  <br />
                  <strong>Tech Stack:</strong> Angular, TypeScript, REST APIs
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
