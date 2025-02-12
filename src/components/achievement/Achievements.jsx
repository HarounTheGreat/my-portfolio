import React from "react";
import "./work.css";
import AchievementsList from "./AchievementsList";

const Achievements = () => {
  return (
    <section className="work section" id="achievements">
      <h2 className="section__title">Achievement</h2>
      <span className="section__subtitle">Notable Accomplishments</span>
      <AchievementsList />
    </section>
  );
};

export default Achievements;
