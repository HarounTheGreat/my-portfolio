import React, { useState, useEffect } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition =
        window.pageYOffset || document.documentElement.scrollTop;

      setIsScrolled(scrollPosition > 24);

      for (let i = 0; i < sections.length; i++) {
        const currentSection = sections[i];
        const sectionTop = currentSection.offsetTop - 50;
        const sectionBottom = sectionTop + currentSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
          const id = currentSection.getAttribute("id");
          setActiveNav(`#${id}`);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={isScrolled ? "header scroll-header" : "header"}>
      <nav className="nav container">
        <a href="#home" className="nav_logo" aria-label="Go to home section">
          Haroun
        </a>
        <div
          id="primary-navigation"
          className={Toggle ? "nav__menu show-menu" : "nav__menu"}
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-estate nav__icon" aria-hidden="true"></i>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-user nav__icon" aria-hidden="true"></i>
                About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                className={
                  activeNav === "#experience"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-file-alt nav__icon" aria-hidden="true"></i>
                Experience
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#education"
                className={
                  activeNav === "#education"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-file-alt nav__icon" aria-hidden="true"></i>
                Education
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#achievements"
                className={
                  activeNav === "#achievements"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-scenery nav__icon" aria-hidden="true"></i>
                Achievements
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i
                  className="uil uil-briefcase-alt nav__icon"
                  aria-hidden="true"
                ></i>
                Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-file-alt nav__icon" aria-hidden="true"></i>
                Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
                onClick={() => showMenu(false)}
              >
                <i className="uil uil-message nav__icon" aria-hidden="true"></i>
                Contact
              </a>
            </li>
          </ul>
          <button
            type="button"
            className="nav__close"
            onClick={() => showMenu(false)}
            aria-label="Close navigation menu"
          >
            <i className="uil uil-times" aria-hidden="true"></i>
          </button>
        </div>

        <button
          type="button"
          className="nav__toggle"
          onClick={() => showMenu(!Toggle)}
          aria-expanded={Toggle}
          aria-controls="primary-navigation"
          aria-label="Open navigation menu"
        >
          <i className="uil uil-apps" aria-hidden="true"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;
