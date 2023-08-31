import React, { useState } from "react";
import Particles from "react-tsparticles";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleClick = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <>
      <Particles
        style={{ position: "absolute !important" }}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: `${theme === "dark" ? "#151019" : "#fff"}`,
            },
          },
          fpsLimit: 600,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: ["grab", "connect"],
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: `${theme === "dark" ? "#ffffff" : "#000"}`,
            },
            links: {
              color: `${theme === "dark" ? "#4db5ff" : "#000"}`,
              distance: 180,
              enable: true,
              opacity: 0.7,
              width: 2,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: true,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.6,
            },
            shape: {
              type: [
                "circle",
                "triangle",
                "line",
                "edge",
                "polygon",
                "star",
                "image",
              ],
              image: {
                src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_cYgoYT-brl1Ki4YFzwIeW5pv00kO5BNbXQ&usqp=CAU",
              },
            },
            size: {
              random: true,
              value: 4,
            },
          },
          detectRetina: false,
        }}
      />
      <div className={`theme ${theme}`}>
        <input
          onClick={() => handleClick()}
          type="checkbox"
          className="checkbox"
          id="checkbox"
        />
        <label htmlFor="checkbox" className="label">
          <i className="fas fa-moon">
            <BsFillMoonFill />
          </i>
          <i className="fas fa-sun">
            <BsFillSunFill />
          </i>
          <div className="ball" />
        </label>
      </div>
      <Header theme={theme} />
      <Nav theme={theme} />
      <About theme={theme} />
      <Experience theme={theme} />
      {/* <Services /> */}
      <Portfolio theme={theme} />
      {/* <Testimonials theme={theme} /> */}
      <Contact theme={theme} />
      <Footer theme={theme} />
    </>
  );
};

export default App;
