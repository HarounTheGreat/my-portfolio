import React from "react";
import "./qualifications.css";

const Experience = () => {
  return (
    <section className="qualification section" id="experience">
      <h2 className="section__title">Software Engineer at Smarteo</h2>
      <div className="section__subtitle">
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt"></i> 06/2023 - Present
        </div>
      </div>
      <div className="qualification__container qualification__container--timeline container">
        <div className="qualification__sections">
          <div className="qualification__content qualification__content-active">
            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Taxiora Booking</h3>
                <span className="qualification__subtitle">
                  Real-time booking backend integrated with mobile apps and
                  smart taximeters for zone-based matching, geocoding, and
                  adaptive fare estimation.
                  <br />
                  <strong>Tech Stack:</strong> TypeScript, Node.js, Redis,
                  MongoDB, PostgreSQL, Geocoding APIs, scikit-learn, Python,
                  Docker
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Taxiora ERP</h3>
                <span className="qualification__subtitle">
                  Revenue-critical finance engine for invoicing, billing,
                  dynamic pricing, payments, and document generation.
                  <br />
                  <strong>Tech Stack:</strong> TypeScript, Node.js, PHP,
                  Symfony, PostgreSQL, Docker
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
                  Taxiora Operator
                </h3>
                <span className="qualification__subtitle">
                  Event-driven B2B dispatch SaaS for 200+ taxis, replacing
                  manual Excel and Word workflows with real-time fleet
                  coordination.
                  <br />
                  <strong>Tech Stack:</strong> TypeScript, Node.js, PHP,
                  RabbitMQ, PostgreSQL, MongoDB, Microservices, Docker
                </span>
              </div>
            </div>

            <div className="qualification__data qualification__data--timeline">
              <div>
                <span className="qualification__rounder"></span>
              </div>
              <div>
                <h3 className="qualification__title">AMR Dashboard</h3>
                <span className="qualification__subtitle">
                  Real-time monitoring and control dashboard for an autonomous
                  mobile robot fleet with live state tracking and WebSockets
                  integration.
                  <br />
                  <strong>Tech Stack:</strong> React, TypeScript, Node.js,
                  PostgreSQL, WebSockets, ROS, Gazebo
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
