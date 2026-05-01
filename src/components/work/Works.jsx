import React from "react";
import { projectsData } from "./data";
import WorkItems from "./WorkItems";
import PersonalProject from "./PersonalProject";

const Works = () => {
  return (
    <div>
      <div className="work__container container grid">
        {projectsData.map((item) => {
          return (
            <WorkItems item={item} key={item.id} />
          );
        })}
      </div>
      <PersonalProject />
    </div>
  );
};

export default Works;
