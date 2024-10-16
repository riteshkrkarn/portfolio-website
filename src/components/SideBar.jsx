import { useState } from "react";
import homeIcon from "../assets/home.svg";
import aboutIcon from "../assets/about.svg";
import skillsIcon from "../assets/skills.svg";
import projectsIcon from "../assets/projects.svg";
import contactIcon from "../assets/contact.svg";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";

function Sidebar() {
  const [theme, setTheme] = useState(moonIcon);
  const handleThemeChange = () => {
    setTheme(theme === moonIcon ? sunIcon : moonIcon);
  };
  return (
    <>
      <div className="w-fit">
        <h1 className="font-signature text-4xl p-2 font-bold w-fit">Ritesh</h1>
      </div>
      <div className="w-4/5 border-zinc-300 border-4 bg-zinc-300 rounded-2xl flex justify-around absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:flex-col lg:w-fit lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:ml-12 lg:h-2/3">
        <div>
          <a href="_" target="_blank" title="Home">
            <img src={homeIcon} alt="Home Icon" className="m-4 w-6 h-6" />
          </a>
        </div>
        <div>
          <a href="_" target="_blank" title="About">
            <img src={aboutIcon} alt="About Icon" className="m-4 w-6 h-6" />
          </a>
        </div>
        <div>
          <a href="_" target="_blank" title="Skills">
            <img src={skillsIcon} alt="Skills Icon" className="m-4 w-6 h-6" />
          </a>
        </div>
        <div>
          <a href="_" target="_blank" title="Projects">
            <img
              src={projectsIcon}
              alt="Projects Icon"
              className="m-4 w-6 h-6"
            />
          </a>
        </div>
        <div>
          <a href="_" target="_blank" title="Contact">
            <img src={contactIcon} alt="Contact Icon" className="m-4 w-6 h-6" />
          </a>
        </div>
        <div>
          <img
            src={theme}
            alt="Icon"
            className="m-4 w-6 h-6 ml-5 cursor-pointer"
            onClick={handleThemeChange}
          />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
