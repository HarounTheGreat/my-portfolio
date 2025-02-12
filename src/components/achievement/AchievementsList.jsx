import React from "react";
import { achievementsData } from "./achievementsData";
import AchievementItem from "./AchievementItem";

const AchievementsList = () => {
  return (
    <div className="work__container container grid">
      {achievementsData.map((item) => (
        <AchievementItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AchievementsList;
