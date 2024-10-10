import { useState } from "react";
import homeIcon from "./assets/home.svg";
import aboutIcon from "./assets/about.svg";
import skillsIcon from "./assets/skills.svg";
import projectsIcon from "./assets/projects.svg";
import contactIcon from "./assets/contact.svg";
import sunIcon from "./assets/sun.svg";
import moonIcon from "./assets/moon.svg";

function MainBox() {
  const [theme, setTheme] = useState(moonIcon);
  const handleThemeChange = () => {
    if (theme === moonIcon) {
      setTheme(sunIcon);
    } else {
      setTheme(moonIcon);
    }
  };
  return (
    <>
      <div className="w-fit">
        <h1 className="font-signature text-4xl p-2 font-bold w-fit">Ritesh</h1>
      </div>
      <div className="flex min-h-screen">
        <div className="w-2/3 border-slate-500 border-4 bg-slate-500 rounded-2xl flex justify-around absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:flex-col lg:w-fit lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:ml-10">
          <a href="_" target="_blank">
            <img src={homeIcon} alt=" Icon" className="m-4 w-6 h-6" />
          </a>
          <a href="_" target="_blank">
            <img src={aboutIcon} alt=" Icon" className="m-4 w-6 h-6" />
          </a>
          <a href="_" target="_blank">
            <img src={skillsIcon} alt=" Icon" className="m-4 w-6 h-6" />
          </a>
          <a href="_" target="_blank">
            <img src={projectsIcon} alt=" Icon" className="m-4 w-6 h-6" />
          </a>
          <a href="_" target="_blank">
            <img src={contactIcon} alt=" Icon" className="m-4 w-6 h-6" />
          </a>
        </div>
        <div className="w-20 max-w-16 ml-3 absolute top-0 right-0">
          <img
            src={theme}
            alt=" Icon"
            className="m-4 w-6 h-6 ml-5 cursor-pointer"
            onClick={handleThemeChange}
          />
        </div>
      </div>
    </>
  );
}

export default MainBox;
