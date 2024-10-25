import { useState } from "react";
import homeIcon from "../assets/SidebarLogo/home.svg";
import skillsIcon from "../assets/SidebarLogo/skills.svg";
import projectsIcon from "../assets/SidebarLogo/projects.svg";
import contactIcon from "../assets/SidebarLogo/contact.svg";
import sunIcon from "../assets/sun.svg";
import moonIcon from "../assets/moon.svg";
import { Link } from "react-router-dom";

function Sidebar() {
  const [theme, setTheme] = useState(moonIcon);
  const handleThemeChange = () => {
    setTheme(theme === moonIcon ? sunIcon : moonIcon);
  };
  return (
    <>
      <div>
        <div className="w-fit lg:fixed">
          <h1 className="font-signature text-2xl md:text-4xl p-2 font-bold w-fit">
            Ritesh
          </h1>
        </div>
        <div className="w-4/5 border-zinc-300 border-2 bg-zinc-300 rounded-2xl flex justify-around fixed bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:flex-col lg:w-fit lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:ml-12 lg:h-2/3">
          <div>
            <Link to="/" title="Home">
              <img src={homeIcon} alt="Home Icon" className="m-4 w-6 h-6" />
            </Link>
          </div>
          <div>
            <Link to="/skills" title="Skills">
              <img src={skillsIcon} alt="Skills Icon" className="m-4 w-6 h-6" />
            </Link>
          </div>
          <div>
            <Link to="/projects" title="Projects">
              <img
                src={projectsIcon}
                alt="Projects Icon"
                className="m-4 w-6 h-6"
              />
            </Link>
          </div>
          <div>
            <Link to="/contact" title="Contact">
              <img
                src={contactIcon}
                alt="Contact Icon"
                className="m-4 w-6 h-6"
              />
            </Link>
          </div>
          <div>
            <img
              src={theme}
              alt="Icon"
              className="m-4 w-6 h-6 ml-5 cursor-pointer"
              onClick={handleThemeChange}
              title="Theme"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
