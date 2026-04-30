import React from "react";
import "./qualifications.css";

const smarteoProjects = [
  {
    title: "Taxiora ERP Frontend",
    icon: "uil uil-briefcase-alt",
    description:
      "Full ERP operations interface built from scratch — driver management, pricing tiers, invoicing, and inventory. Used daily by operations teams.",
    stack: "React, TypeScript, Redux, Zod, PHP (Symfony), PostgreSQL",
  },
  {
    title: "Taxiora Booking",
    icon: "uil uil-bolt-alt",
    description:
      "Real-time booking backend for a live 200+ taxi fleet. 85% latency reduction and 4x throughput increase via Redis migration and distributed locking. ML-assisted fare prediction trained on 10,000+ trips.",
    stack:
      "TypeScript, Node.js, Redis, MongoDB, PostgreSQL, Geocoding APIs, scikit-learn, Python, Docker",
  },
  {
    title: "AMR Dashboard",
    icon: "uil uil-chart-growth",
    description:
      "Real-time monitoring dashboard for an autonomous mobile robot fleet on a factory floor. Live state tracking via WebSockets reduced incident response time by 25–35%.",
    stack: "React, TypeScript, Node.js, PostgreSQL, WebSockets, ROS, Gazebo",
  },
  {
    title: "Jobzioo Backoffice",
    icon: "uil uil-layers-alt",
    description:
      "Angular job management system built for a German international client. Modules for candidate tracking, job placement, demand management, and reporting. 100% on-time delivery.",
    stack: "Angular, TypeScript, REST APIs",
  },
  {
    title: "Taxiora Operator",
    icon: "uil uil-bolt-alt",
    description:
      "Event-driven B2B dispatch SaaS for 200+ taxis — replaced manual Excel and Word workflows. RabbitMQ pipelines sync state from PostgreSQL to MongoDB with sub-second latency. Zone-based driver matching and full audit trails.",
    stack: "TypeScript, Node.js, RabbitMQ, PostgreSQL, MongoDB, Docker",
  },
];

const Experience = () => {
  return (
    <section
      className="qualification qualification--smarteo section"
      id="experience"
    >
      <h2 className="section__title">Full Stack Engineer at Smarteo</h2>
      <span className="section__subtitle">
        <div className="qualification__calendar qualification__calendar--smarteo">
          <i className="uil uil-calendar-alt"></i> Jun 2023 – Present
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
