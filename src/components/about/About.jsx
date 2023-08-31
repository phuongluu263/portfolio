import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers, FiFolderPlus } from "react-icons/fi";

import "./About.css";
import ME from "../../assets/image.jpg";

const About = ({ theme }) => {
  return (
    <section id="about" className={theme}>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>...</small>
            </article>

            <article className="about__card">
              <FiFolderPlus className="about__icon" />
              <h5>Project</h5>
              <small>6 Completed</small>
            </article>
          </div>

          <p>
            I graduated from Ho Chi Minh City University of Technology. My major
            is Software Technology. I have been learning web programming for
            more than 2 years and interned for a startup for 1 year. Currently,
            I’m pretty familiar with HTML, CSS, JavaScript, ReactJS, NextJS, and
            UI Library with a few projects. My passion is learning new languages
            and technologies to solve problems at work. I like problem analysis,
            sharing my knowledge, and helping others.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
