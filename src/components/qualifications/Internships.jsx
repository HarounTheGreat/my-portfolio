import React from "react";
import "./qualifications.css";

const internships = [
  {
    company: "Smarteo",
    role: "Software Engineering Intern",
    period: "12/2022 - 06/2023",
    description:
      "Built a full-stack blood donation management platform that led to a full-time conversion.",
    stack: "MERN Stack, Power BI",
  },
  {
    company: "SSH Engineering",
    role: "Software Engineering Intern",
    period: "06/2022 - 08/2022",
    description:
      "Developed backend and frontend features, form validation, and internal web application improvements.",
    stack: "PHP, JavaScript",
  },
  {
    company: "ITGATE-GROUP",
    role: "Software Engineering Intern",
    period: "01/2021 - 05/2021",
    description: "Built a social media sentiment analysis platform.",
    stack: "Django, Python",
  },
];

const Internships = () => {
  return (
    <section className="qualification qualification--internships section">
      <h2 className="section__title">Internships</h2>
      <span className="section__subtitle">My Professional Training</span>

      <div className="qualification__container container">
        <div className="qualification__timeline">
          {internships.map((internship, index) => (
            <article
              key={internship.company}
              className="qualification__timeline-item"
            >
              <div className="qualification__timeline-marker" aria-hidden="true">
                <span className="qualification__rounder qualification__rounder--timeline"></span>
                {index < internships.length - 1 && (
                  <span className="qualification__line qualification__line--timeline"></span>
                )}
              </div>

              <div className="qualification__timeline-content">
                <h3 className="qualification__title">{internship.company}</h3>
                <span className="qualification__subtitle">{internship.role}</span>
                <div className="qualification__calendar qualification__calendar--timeline">
                  <i className="uil uil-calendar-alt"></i> {internship.period}
                </div>
                <p className="qualification__description">
                  {internship.description}
                </p>
                <p className="qualification__stack">
                  <strong>Tech Stack:</strong> {internship.stack}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
