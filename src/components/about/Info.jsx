import React from "react";

const Info = ({ details }) => {
  return (
    <div className="about__info grid">
      {details.map((info, i) => {
        const { title, desc, icon } = info;

        return (
          <div
            className="about__box"
            key={i}
          >
            <i className={`bx ${icon} about__icon`}></i>
            <h3 className="about__title">{title}</h3>
            <span className="about__subtitle">{desc}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
