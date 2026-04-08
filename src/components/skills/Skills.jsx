import React from "react";
import "./skills.css";
import Backend from "./Backend";
import Frontend from "./Frontend";
import Design from "./Design";
import Database from "./Database";
import DataAnalysis from "./DataAnalysis";
import DevOps from "./DevOps";

const skillSections = {
  frontend: <Frontend />,
  backend: <Backend />,
  database: <Database />,
  dataAnalysis: <DataAnalysis />,
  devops: <DevOps />,
  design: <Design />,
};

const Skills = ({ content }) => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My Technical level</span>

      <div className="skills__container container grid">
        {content.skillsOrder.map((skillKey) => (
          <React.Fragment key={skillKey}>
            {skillSections[skillKey]}
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Skills;
