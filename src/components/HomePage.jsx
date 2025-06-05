import React from "react";

function HomePage() {
  return (
    <>
      <div className="flex flex-col justify-between font-afacadflux overflow-hidden">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="border border-zinc-300 w-fit h-fit p-6 rounded-lg mx-auto bg-zinc-300 mt-3 md:mt-10">
            <h1 className="text-3xl md:text-4xl font-bold">
              Full Stack Developer
            </h1>
          </div>

          <div className="w-44 h-44 border border-black rounded-full flex justify-center items-center mx-auto my-6">
            <img src="" alt="Profile Photo" />
          </div>

          <div className="border border-black h-0 w-1/3 mx-auto md:w-1/5 lg:w-1/3 lg:mx-auto my-4 lg:my-6"></div>

          <div className="mx-10 my-2 text-center lg:text-left lg:flex lg:items-center lg:justify-center lg:flex-col lg:mx-auto lg:my-2">
            <p className="text-lg">Hi I'm</p>
            <h1 className="text-4xl -mt-1">Ritesh Kumar Karn</h1>
            <p className="text-lg">
              1<sup>st</sup> year | B.E. CSE
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
