import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/1.png";
import IMG2 from "../../assets/2.png";
import IMG3 from "../../assets/3.png";
import IMG4 from "../../assets/4.png";
import IMG5 from "../../assets/5.png";
import IMG6 from "../../assets/6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Claritas - Building quality management application",
    github: "https://github.com/Novus-Solutions/claritas-fe",
    demo: "https://www.claritas.app",
  },
  {
    id: 2,
    image: IMG2,
    title: "PVPA - Stream room management application",
    github: "https://github.com/Novus-Solutions/pvpa2023",
    demo: "https://demo.dbtrj8wbv4gk7.amplifyapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Proofn - The application provides information",
    github: "https://github.com/Novus-Solutions/proofn-website",
    demo: "https://about.proofn.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Application of supermarket system",
    github: "https://github.com/phuongluu263/Web_PHP",
    demo: "https://www.youtube.com/playlist?list=PLWTu87GngvNz1rTGDUdif1sk1JbZpE-m5",
  },
  {
    id: 5,
    image: IMG5,
    title: "Netflix movie watching application",
    github: "https://github.com/phuongluu263/Website_film",
    demo: "https://www.youtube.com/watch?v=mqUN4N2q4qY&t=2460s",
  },
  {
    id: 6,
    image: IMG6,
    title: "Website application for selling shoes",
    github: "https://github.com/phuongluu263/Website_BanGiay",
    demo: "https://github.com/phuongluu263/Website_BanGiay",
  },
];

const Portfolio = ({ theme }) => {
  return (
    <section id="portfolio" className={theme}>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((props) => {
          return (
            <article key={props.id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={props.image} alt="" />
              </div>
              <h3>{props.title}</h3>
              <div className="portfolio__item-cta">
                <a href={props.github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={props.demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
