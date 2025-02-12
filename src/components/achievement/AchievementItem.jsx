import React from "react";

const AchievementItem = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
    </div>
  );
};

export default AchievementItem;
