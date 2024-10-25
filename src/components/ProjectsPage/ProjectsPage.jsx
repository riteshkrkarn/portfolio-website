import React from "react";
import Portfolio from "../../assets/Projects/Portfolio.png";
import FetchWeather from "../../assets/Projects/FetchWeather.png";
import TicTacToe from "../../assets/Projects/TicTacToe.png";
import htmlLogo from "../../assets/SkillsLogo/html-logo.svg";
import cssLogo from "../../assets/SkillsLogo/css-logo.svg";
import jsLogo from "../../assets/SkillsLogo/js-logo.svg";
import reactLogo from "../../assets/SkillsLogo/react-js-logo.svg";
import tailwindLogo from "../../assets/SkillsLogo/tailwind-logo.svg";
import githubLogo from "../../assets/SkillsLogo/github-logo.svg";
import { Helmet } from "react-helmet-async";
import ProjectCard from "./ProjectCard";

const ProjectsPage = () => {
  return (
    <>
      <Helmet>
        <title>Projects | Ritesh's Portfolio</title>
      </Helmet>
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center w-fit">
          <div className="w-fit  mt-2 mx-auto text-2xl md:text-4xl lg:text-2xl text-center underline underline-offset-4">
            <h1>Projects</h1>
          </div>
          <div className="w-3/5 text-center text-sm md:text-2xl lg:text-lg m-4 md:m-12 mx-auto p-1 md:p-2 ">
            <p>These are some of the projects I've made.</p>
          </div>
          <div>
            <ProjectCard
              heading="Tic Tac Toe Game"
              description="This is a responsive Tic Tac Toe game developed using HTML, CSS, and JavaScript. The game allows two players to play against each other on the same device."
              projectSS={TicTacToe}
              skill1={htmlLogo}
              skill1Alt="HTML"
              skill2={cssLogo}
              skill2Alt="CSS"
              skill3={jsLogo}
              skill3Alt="Javscript"
              projectLink="https://github.com/riteshkumarkarn/tic-tac-toe-game"
              gitHub={githubLogo}
            />
            <ProjectCard
              heading="Fetch Weather App"
              description="This is a weather fetch app built using React.js, Tailwind CSS, and
            Vite. This is my first project using these technologies. It allows
            users to fetch and view weather information based on their location
            or city input."
              projectSS={FetchWeather}
              skill1={htmlLogo}
              skill1Alt="HTML"
              skill2={jsLogo}
              skill2Alt="Javascript"
              skill3={reactLogo}
              skill3Alt="React"
              skill4={tailwindLogo}
              skill4Alt="Tailwind"
              projectLink="https://github.com/riteshkumarkarn/fetch-weather"
              gitHub={githubLogo}
            />
            <ProjectCard
              heading="Portfolio Website"
              description="This is a portfolio website created using React and Tailwind CSS. The layout is completed, showcasing various sections to highlight projects, skills, and contact information."
              projectSS={Portfolio}
              skill1={htmlLogo}
              skill1Alt="HTML"
              skill2={jsLogo}
              skill2Alt="Javascript"
              skill3={reactLogo}
              skill3Alt="React"
              skill4={tailwindLogo}
              skill4Alt="Tailwind"
              projectLink="https://github.com/riteshkumarkarn/portfolio-website"
              gitHub={githubLogo}
            />
          </div>
          <div className="border border-black bg-zinc-100 m-2 flex flex-col">
            <h1></h1>
            <p></p>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="border border-black bg-zinc-100 m-2 flex flex-col">
            <h1></h1>
            <p></p>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
