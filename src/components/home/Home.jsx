import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import profileImg from "assets/profile.jpg";
import volImg from "assets/red_crescent.jpg";
import { isVolunteering } from "Helper/getType";

const Home = () => {
  const img = isVolunteering() ? volImg : profileImg;
  return (
    <section
      className="home section"
      id="home"
    >
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />
          <div
            className="home__img"
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              boxShadow: "inset 0 0 0 9px rgba(255, 255, 255, 0.3)",
              order: 1,
              justifyContent: "center",
              width: "300px",
              height: "300px",
              animation: "profile__animate 8s ease-in-out infinite 1s",
              filter: "saturate(1)",
            }}
          ></div>

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
