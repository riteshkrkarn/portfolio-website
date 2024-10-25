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
    setTheme(theme === moonIcon ? sunIcon : moonIcon);
  };

  return (
    <>
      <div className="h-screen flex flex-col justify-between font-poppins">
        <div className="w-fit">
          <h1 className="font-signature text-4xl p-2 font-bold w-fit">
            Ritesh
          </h1>
        </div>

        <div className="w-2/3 border-slate-500 border-4 bg-slate-500 rounded-2xl flex justify-around absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4 lg:flex-col lg:w-fit lg:left-0 lg:top-1/2 lg:-translate-y-1/2 lg:ml-12">
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
            alt="Icon"
            className="m-4 w-6 h-6 ml-5 cursor-pointer"
            onClick={handleThemeChange}
          />
        </div>

        <div className="border hidden lg:block w-px h-screen border-black absolute top-0 left-24"></div>

        <div className="flex flex-col justify-center items-center h-full">
          <div className="border border-black w-fit h-fit p-6 rounded-lg mx-auto bg-slate-200 mt-3 md:mt-10">
            <h1 className="text-3xl md:text-4xl">Frontend Developer</h1>
          </div>

          <div className="w-44 h-44 border border-black rounded-full flex justify-center items-center mx-auto my-8">
            <img src="" alt="Profile Photo" />
          </div>

          <div className="border border-black h-0 w-1/3 mx-auto md:w-1/5 lg:w-1/3 lg:mx-auto lg:my-6"></div>

          <div className="mx-10 my-4 text-center lg:text-left lg:flex lg:items-center lg:justify-center lg:flex-col lg:mx-auto lg:-mt-1">
            <p className="text-lg">Hi I'm</p>
            <h1 className="text-4xl -mt-1">Ritesh Kumar Karn</h1>
            <p className="text-lg mb-4">
              1<sup>st</sup> year | B.E. CSE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainBox;
