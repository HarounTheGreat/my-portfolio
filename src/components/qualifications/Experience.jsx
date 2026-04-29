import React from "react";
import "./qualifications.css";

const smarteoProjects = [
  {
    title: "Taxiora ERP",
    icon: "uil uil-briefcase-alt",
    description:
      "Built the ERP interface and backend systems for drivers, taxis, invoices, pricing, stock, payments, and client operations.",
    stack: "React.js (Redux, Zod, TypeScript), PHP (Symfony), PostgreSQL",
  },
  {
    title: "Taxiora Booking",
    icon: "uil uil-bolt-alt",
    description:
      "Real-time booking backend connecting mobile apps and smart taximeters with fleet tracking, matching, and fare estimation.",
    stack:
      "Node.js, Redis, MongoDB, PostgreSQL, Geocoding APIs, Python, Docker",
  },
  {
    title: "AMR Dashboard monitoring",
    icon: "uil uil-chart-growth",
    description:
      "Real-time monitoring and control dashboard for an autonomous mobile robot fleet on an industrial factory floor.",
    stack: "React.js, Node.js, PostgreSQL, ROS, Gazebo",
  },
  {
    title: "Jobzioo Backoffice",
    icon: "uil uil-layers-alt",
    description:
      "Internal job management system for candidate tracking, job placement, demand management, and reporting.",
    stack: "Angular, TypeScript, REST APIs",
  },
];

const Experience = () => {
  return (
    <section
      className="qualification qualification--smarteo section"
      id="experience"
    >
      <h2 className="section__title">Software Engineer at Smarteo</h2>
      <span className="section__subtitle">
        <div className="qualification__calendar qualification__calendar--smarteo">
          <i className="uil uil-calendar-alt"></i> 06/2023 - Present
        </div>
      </span>
      <div className="qualification__container container">
        <div className="qualification__sections qualification__sections--smarteo">
          <div className="qualification__content qualification__content-active qualification__content--smarteo">
            {smarteoProjects.map((project) => (
              <div
                className="qualification__data qualification__data--smarteo"
                key={project.title}
              >
                <div className="qualification__panel qualification__panel--smarteo">
                  <div className="qualification__eyebrow qualification__eyebrow--smarteo">
                    Smarteo Project
                  </div>
                  <div className="qualification__title-row qualification__title-row--smarteo">
                    <span className="qualification__card-icon qualification__card-icon--smarteo">
                      <i className={project.icon}></i>
                    </span>
                    <h3 className="qualification__title">{project.title}</h3>
                  </div>
                  <p className="qualification__copy qualification__copy--smarteo">
                    {project.description}
                  </p>
                  <p className="qualification__stack qualification__stack--smarteo">
                    <strong>Tech Stack:</strong> {project.stack}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
