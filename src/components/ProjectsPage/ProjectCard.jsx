import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div>
        <div className="md:w-1/2 lg:w-2/5 border border-black bg-zinc-100 m-4 flex flex-col  rounded-2xl p-2 md:mx-auto">
          <h1 className="text-xl text-center px-2">{props.heading}</h1>
          <p className="px-4 py-2 text-sm break-words">{props.description}</p>
          <div className=" p-4 flex justify-center items-center">
            <img
              src={props.projectSS}
              alt={props.heading}
              className="w-64 h-64 object-contain max-w-full"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex w-40 h-12 mx-2">
              <img src={props.skill1} alt={props.skill1Alt} className="m-1" />
              <img src={props.skill2} alt={props.skill2Alt} className="m-1" />
              <img src={props.skill3} alt={props.skill3Alt} className="m-1" />
              <img src={props.skill4} alt={props.skill4Alt} className="m-1" />
            </div>
            <div className="w-20 h-12 p-2 flex justify-center items-center">
              <a href={props.projectLink} target="_blank">
                <img src={props.gitHub} alt="github" className="w-8 h-12" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
