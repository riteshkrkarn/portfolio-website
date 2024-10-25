import React from "react";
import htmlLogo from "../assets/SkillsLogo/html-logo.svg";
import cssLogo from "../assets/SkillsLogo/css-logo.svg";
import jsLogo from "../assets/SkillsLogo/js-logo.svg";
import reactLogo from "../assets/SkillsLogo/react-js-logo.svg";
import tailwindLogo from "../assets/SkillsLogo/tailwind-logo.svg";
import githubLogo from "../assets/SkillsLogo/github-logo.svg";
import { Helmet } from "react-helmet-async";

const SkillsPage = () => {
  return (
    <>
      <Helmet>
        <title>Skills | Ritesh's Portfolio</title>
      </Helmet>
      <div className="lg:flex lg:flex-col">
        <div className="flex flex-col items-center justify-center w-fit">
          <div className="w-fit  mt-2 mx-auto text-2xl md:text-4xl lg:text-2xl text-center underline underline-offset-4">
            <h1>My Technical Skill Set</h1>
          </div>
          <div className="w-3/5 text-center text-sm md:text-2xl lg:text-lg m-8 md:m-12 mx-auto p-1 md:p-2 ">
            <p>
              I primarily build responsive and interactive web apps using modern
              technologies like React and Tailwind CSS. My goal is to create
              user-friendly interfaces that provide a seamless experience.
            </p>
          </div>
          <div className="border border-black w-3/4 flex flex-wrap justify-center my-10 p-4 md:w-1/2 lg:w-2/5">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black m-2 md:m-4 overflow-hidden p-2 bg-cyan-50">
              <img
                src={htmlLogo}
                alt="HTML"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black m-2 md:m-4 overflow-hidden p-2 bg-cyan-50">
              <img
                src={cssLogo}
                alt="CSS"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black m-2 md:m-4 overflow-hidden p-2 bg-cyan-50">
              <img
                src={jsLogo}
                alt="Javascript"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black m-2 md:m-4 overflow-hidden p-2 bg-cyan-50">
              <img
                src={reactLogo}
                alt="React.js"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black m-2 md:m-4 overflow-hidden p-2 bg-cyan-50">
              <img
                src={tailwindLogo}
                alt="Tailwind"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-black m-2 md:m-4 overflow-hidden p-2 bg-cyan-50">
              <img
                src={githubLogo}
                alt="Github"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsPage;
